import dayjs from "dayjs";
import axios from "axios";
import { ControleCronRepository } from "../../database/repositories/ControleCronRepository";
import { PedidoRastreamentoRepository } from "../../database/repositories/PedidoRastreamentoRepository";
import { NotasRepository } from "../../database/repositories/NotasRepository";
import { PedidoRastreamento } from "../../database/entities/mysql/PedidoRastreamento";
import { formatCurrency } from "../../functions/formatCurrency";

function getEtapaAtual(pedido: any) {
    if (pedido.dataCancelamento) return "CANCELAMENTO";
    if (pedido.dataEntrega) return "ENTREGA";
    if (pedido.dataDeSaida) return "SAIDA";
    if (pedido.dataSeparacao) return "SEPARACAO";
    if (pedido.dataEmissao) return "EMISSAO";
    return null;
}

function podeEnviarEmailSaida(pedido: any): boolean {
    if (!pedido.dataDeEntrega) return true;

    const datasEntrega = Array.isArray(pedido.dataDeEntrega)
        ? pedido.dataDeEntrega
        : [pedido.dataDeEntrega];

    const maiorDataEntrega = datasEntrega
        .map((data: string) => dayjs(data))
        .sort((a: any, b: any) => b.valueOf() - a.valueOf())[0];

    if (!maiorDataEntrega) return false;

    return maiorDataEntrega.isSameOrBefore(dayjs(), "day");
}

function getNomeCliente(pedido: any): string {
  const fantasia = pedido?.cliente?.fantasia?.trim();
  const nome = pedido?.cliente?.nome?.trim();

  if (!fantasia) {
    return nome;
  }

  if (/^\*+$/.test(fantasia)) {
    return nome;
  }

  return fantasia;
}

function formatarDestinatarios(emails: string | null | undefined): string {
    if (!emails) return "";

    return emails
        .split(";")
        .map(e => e.trim())
        .filter(Boolean)
        .join(",");
}

type PedidoComNota = PedidoRastreamento & {
    valorTotalNota?: any;
};

export class EnviarEmailCliente {
    static etapaEmailMap = {
        EMISSAO: "nota_fiscal",
        SEPARACAO: "em_separacao",
        SAIDA: "saiu_para_entrega",
        ENTREGA: "entregue",
    };

    static emailConfig = {
        CANCELAMENTO: {
            normal: {
                subject: "Nota Cancelada",
                templateId: "3vz9dley5d14kj50",
            },
            retira: {
                subject: "Nota Cancelada",
                templateId: "3vz9dley5d14kj50",
            },
        },
        EMISSAO: {
            normal: {
                subject: "Nota Emitida",
                templateId: "3zxk54v5v3zljy6v",
            },
            retira: {
                subject: "Nota Emitida",
                templateId: "351ndgw5kpxgzqx8",
            },
        },

        SEPARACAO: {
            normal: {
                subject: "Pedido em Separação",
                templateId: "jy7zpl9r9mrl5vx6",
            },
            // retira: {
            //     subject: "Pedido separado para retirada",
            //     templateId: "tpl_separacao_retira",
            // },
        },

        SAIDA: {
            normal: {
                subject: "Pedido saiu para entrega",
                templateId: "3yxj6ljy2m1ldo2r",
            },
            // retira: {
            //     subject: "Pedido pronto para retirada no balcão",
            //     templateId: "tpl_saida_retira",
            // },
        },

        ENTREGA: {
            normal: {
                subject: "Pedido entregue com sucesso",
                templateId: "pr9084znj5e4w63d",
            },
            // retira: {
            //     subject: "Pedido retirado com sucesso",
            //     templateId: "tpl_entrega_retira",
            // },
        },
    };

    static getEmailConfig(etapa: string, retira: boolean) {
        const configEtapa = this.emailConfig[etapa as keyof typeof this.emailConfig];

        if (!configEtapa) return null;

        if (retira && "retira" in configEtapa) {
            return configEtapa.retira;
        }

        return configEtapa.normal;
    }

    static async enviarEmail(etapa: any, pedido: any) {
        const config = this.getEmailConfig(etapa, pedido.retira);

        if (!config) return;

        try {
            const response = await axios.post("http://172.16.0.34:3000/api/send-email", {
                data: {
                    mail: {
                        user: "naoresponda@contatosales.com.br",
                        options: {
                            subject: config.subject,
                            from: "Sales",
                            to: formatarDestinatarios(pedido?.cliente?.email),
                        },
                    },
                    fields: {
                        nome: getNomeCliente(pedido),
                        pedidoId: pedido?.idPedido,
                        valorTotal: formatCurrency(pedido?.valorTotalNota),
                    },
                    templateId: config.templateId,
                },
            });

            console.log(`Email enviado (${etapa} | retira=${pedido.retira})`);

        } catch (error) {
            console.log("Erro ao enviar email:", error);
        }
    }

    static async execute() {

        const ultimaAtt = await ControleCronRepository.lastAtualizacao();
        if (!ultimaAtt) return;

        const pedidos = await PedidoRastreamentoRepository.findByUltimaAtualizacao(
            dayjs(ultimaAtt.ultima_execucao).toDate()
        );

        if (!pedidos?.length) return;

        for (const pedidoOriginal of pedidos) {
            const pedido = pedidoOriginal as PedidoComNota;

            const etapa = getEtapaAtual(pedido);
            if (!etapa) continue;

            if (etapa === "SAIDA" && !podeEnviarEmailSaida(pedido)) {
                console.log(
                    `Saída futura, aguardando maior data (${pedido.idPedido})`
                );
                continue;
            }

            const infoNota = await NotasRepository.findNota(
                pedido.idNota,
                pedido.idFilial
            );

            if (!infoNota) continue;

            pedido.valorTotalNota = infoNota?.valorTotalNota;

            await this.enviarEmail(etapa as keyof typeof this.emailConfig, pedido);

            await PedidoRastreamentoRepository.atualizarStatus(
                pedido.id,
                dayjs().format(),
                this.etapaEmailMap[etapa as keyof typeof this.etapaEmailMap]
            )
        }

        await ControleCronRepository.updateTime();
    }
}