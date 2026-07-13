import { MoreThan } from "typeorm";
import { AppDataSource } from "../data-source";
import { PedidoRastreamento } from "../entities/mysql/PedidoRastreamento";

export const PedidoRastreamentoRepository = AppDataSource.getRepository(PedidoRastreamento).extend({

    findByUltimaAtualizacao(data: Date) {
        return this.find({
            where: {
                updatedAt: MoreThan(data)
            },
            order: {
                updatedAt: "ASC"
            },
            relations: {
                cliente: true
            },
            select: {
                id: true,
                idPedido: true,
                idFilial: true,
                idCliente: true,
                cliente: {
                    id: true,
                    fantasia: true,
                    nome: true,
                    email: true,
                    emailNfe: true
                },
                dataPedido: true,
                retira: true,
                idNota: true,
                numeroNota: true,
                dataEmissao: true,
                dataSeparacao: true,
                dataDeSaida: true,
                dataEntrega: true,
                dataCancelamento: true,
                createdAt: true,
                updatedAt: true
            }
        });
    },

    atualizarStatus(id: number, ultimoEnvioEm: string, ultimaEtapa?: string) {
        return this.update({
            id: id
        }, {
            ultimoEmailEnviadoEm: ultimoEnvioEm,
            ultimaEtapaEmail: ultimaEtapa
        });
    },

    findByUltimoEmailEnviado(id:number){
        return this.findOne({
            where: {
                id: id
            },
            order: {
                ultimoEmailEnviadoEm: "DESC"
            }
        });
    }

});