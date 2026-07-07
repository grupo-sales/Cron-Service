import {
    Entity,
    Column,
    PrimaryColumn,
} from "typeorm";

@Entity({ name: "v_nota", })
export class VNota {
    @PrimaryColumn()
    id: string;

    @Column({ type: "datetime", nullable: true })
    dataEmissao: Date;

    @Column()
    idFilial: number;

    @Column()
    numeroNota: number;

    @Column()
    tipoNota: string;

    @Column()
    tipoRegistro: string;

    @Column()
    idCliente: number;

    @Column()
    considerarValorNaVenda: number;

    @Column()
    considerarCustoNaVenda: number;

    @Column({ nullable: true })
    filialVendedor: number;

    @Column({ nullable: true })
    idVendedor: number;

    @Column({ nullable: true })
    idVendedorSecundario: number;

    @Column({ nullable: true })
    idVendedorResponsavel: number;

    @Column({ nullable: true })
    idTransportadora: number;

    @Column({ nullable: true })
    cfop: string;

    @Column({ nullable: true })
    idPrazoVencimento: number;

    @Column({ nullable: true })
    idPortador: number;

    @Column({ nullable: true })
    numeroDeVolumes: number;

    @Column({ type: "decimal", nullable: true })
    pesoBruto: number;

    @Column({ type: "decimal", nullable: true })
    pesoLiquido: number;

    @Column({ type: "datetime", nullable: true })
    dataEntrega: Date;

    @Column({ nullable: true })
    situacao: string;

    @Column({ nullable: true })
    idRamo: number;

    @Column({ nullable: true })
    idRegiao: number;

    @Column({ nullable: true })
    idPedido: number;

    @Column({ nullable: true })
    numeroDeItens: number;

    @Column({ type: "datetime", nullable: true })
    dataDoPedido: Date;

    @Column({ type: "decimal", nullable: true })
    valorTotalNota: number;

    @Column({ type: "decimal", nullable: true })
    valorTotalFiscal: number;

    @Column({ type: "decimal", nullable: true })
    valorLiquido: number;

    @Column({ type: "decimal", nullable: true })
    valorLiquidoFiscal: number;

    @Column({ type: "decimal", nullable: true })
    custoTotal: number;

    @Column({ nullable: true })
    percBola: number;

    @Column({ nullable: true })
    pecBola1: number;

    @Column({ nullable: true })
    enderecoEntrega: string;

    @Column({ type: "decimal", nullable: true })
    custoCliente: number;

    @Column({ nullable: true })
    baixa: number;

    @Column({ type: "decimal", nullable: true })
    custoTotalLiquido: number;

    @Column({ nullable: true })
    idSupervisor: number;

    @Column({ nullable: true })
    supervisor: string;

    @Column({ nullable: true })
    complementoCfop: string;

    @Column({ nullable: true })
    latitude: string;

    @Column({ nullable: true })
    longitude: string;

    @Column({ type: "decimal", nullable: true })
    totalLiquidoMl: number;

    @Column({ nullable: true })
    serie2: string;

    @Column({ type: "decimal", nullable: true })
    valTotLiquidoFiscal: number;

    @Column({ nullable: true })
    isentoPisCofins: number;

    @Column({ nullable: true })
    isentoIpi: number;

    @Column({ nullable: true })
    isentoIcms: number;

    @Column({ type: "decimal", nullable: true })
    totalLiquidoFaturam: number;

    @Column({ nullable: true })
    pecBola2: number;

    @Column({ nullable: true })
    naoCalcularComissao: number;

    @Column({ nullable: true })
    pecBola3: number;

    @Column({ nullable: true })
    sitVendedorOriginal: string;

    @Column({ nullable: true })
    situacaoVendedor1: string;

    @Column({ nullable: true })
    sitVendedorResponsavel: string;

    @Column({ nullable: true })
    situacaoSupervisor: string;

    @Column({ nullable: true })
    considerarVendaMedia: number;

    @Column({ type: "decimal", nullable: true })
    valorTotalComissao: number;

    @Column({ nullable: true })
    ordemDeCompra: string;

    @Column({ nullable: true })
    nomeComprador: string;

    @Column({ nullable: true })
    tabelaDePreco: string;

    @Column({ nullable: true })
    tipoDeTabela: string;

    @Column({ nullable: true })
    observacao1: string;

    @Column({ nullable: true })
    observacao2: string;

    @Column({ nullable: true })
    textoDaNota1: string;

    @Column({ nullable: true })
    textoDaNota2: string;

    @Column({ nullable: true })
    nomeLocalDeEntrega: string;

    @Column({ nullable: true })
    enderecoDeEntrega: string;

    @Column({ nullable: true })
    numeroEndDeEntrega: string;

    @Column({ nullable: true })
    complemEndDeEntrega: string;

    @Column({ nullable: true })
    gerouCte: number;

    @Column({ nullable: true })
    codigoMotivoDaDevolucao: number;

    @Column({ nullable: true })
    gerouDanfe: number;

    @Column({ nullable: true })
    numeroDaColeta: number;

    @Column({ type: "datetime", nullable: true })
    dataDaColeta: Date;

    @Column({ nullable: true })
    cidadeDeEntrega: string;

    @Column({ nullable: true })
    ufDeEntrega: string;

    @Column({ nullable: true })
    codigoIbgeDeEntrega: string;

    @Column({ nullable: true })
    cepDeEntrega: string;

    @Column({ nullable: true })
    tipoDeFrete: string;

    @Column({ type: "decimal", nullable: true })
    valorDoFrete: number;

    @Column({ type: "decimal", nullable: true })
    valorSeguro: number;

    @Column({ nullable: true })
    numeroDoPedido: number;

    @Column({ type: "datetime", nullable: true })
    dataDaSaida: Date;

    @Column({ nullable: true })
    controle: string;

    @Column({ nullable: true })
    timestamp: Date;
}