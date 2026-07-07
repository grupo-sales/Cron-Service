import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "v_cliente" })
export class VCliente {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idRamo: number;

  @Column()
  idRegiao: number;

  @Column()
  fantasia: string;

  @Column()
  endereco: string;

  @Column()
  numeroEndereco: string;

  @Column()
  complementoEndereco: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  codigoIbge: string;

  @Column()
  cep: string;

  @Column()
  tipo: string;

  @Column()
  cpfCnpj: string;

  @Column()
  inscricaoEstadual: string;

  @Column()
  telefone: string;

  @Column()
  telefone1: string;

  @Column()
  enderecoCobranca: string;

  @Column()
  numeroEndCobranca: string;

  @Column()
  compEndCobranca: string;

  @Column()
  cepCobranca: string;

  @Column()
  bairroCobranca: string;

  @Column()
  cidadeCobranca: string;

  @Column()
  ufCobranca: string;

  @Column()
  codigoIbgeCobranca: string;

  @Column()
  idPortador: number;

  @Column()
  idVendedor: number;

  @Column()
  idVendedor1: number;

  @Column()
  idVendedor2: number;

  @Column()
  idTransportadora: number;

  @Column()
  idTipoEmpresa: number;

  @Column()
  tabelaPreco: string;

  @Column()
  observacao: string;

  @Column()
  dataImplantacao: Date;

  @Column()
  dataUltimaCompra: Date;

  @Column()
  email: string;

  @Column()
  emailNfe: string;

  @Column()
  idPrazoVencimento: number;

  @Column()
  idSituacaoCliente: number;

  @Column()
  idMatriz: number;

  @Column()
  cnae: string;

  @Column()
  telefone2: string;

  @Column()
  idSegmentoRamo: number;

  @Column()
  dataFundacao: Date;

  @Column()
  idFknGrupoWeb: number;

  @Column()
  qtdeLimitePedidoWeb: number;

  @Column()
  valorLimitePedidoWeb: number;

  @Column()
  controleCotasWeb: string;

  @Column()
  acaoValCotaMenWeb: string;

  @Column()
  acaoNroPedMenWeb: string;

  @Column()
  bloquearAutomaticoWeb: string;

  @Column()
  pais: string;

  @Column()
  ramal: string;

  @Column()
  ramal1: string;

  @Column()
  fax: string;

  @Column()
  idCfop: number;

  @Column()
  restricaoCredito: number;

  @Column()
  etiqueta: number;

  @Column()
  desligaComissao: number;

  @Column()
  suframa: string;

  @Column()
  valorTotalGeral: number;

  @Column()
  valorAno: number;

  @Column()
  maiorCompra: number;

  @Column()
  nroVendaTotal: number;

  @Column()
  nroVendaAno: number;

  @Column()
  nroDupAtr: number;

  @Column()
  nroDiasAtraso: number;

  @Column()
  maiorAtraso: number;

  @Column()
  limiteCredito: number;

  @Column()
  semanaVisita: number;

  @Column()
  idRoteiro: number;

  @Column()
  obrigatorioEmailNfe: number;

  @Column()
  consumidorFinal: number;

  @Column()
  planta: string;

  @Column()
  dataAlteracao: Date;

  @Column()
  bloquearPrazo: number;

  @Column()
  bloquearPortador: number;

  @Column()
  dataUltimoAtraso: Date;

  @Column()
  tipoTabela: number;

  @Column()
  prazoTeleProgramado: number;

  @Column()
  texto: string;

  @Column()
  setor: string;

  @Column()
  alerta: string;

  @Column()
  agrupamentoDuplicata: number;

  @Column()
  diaVencimento: number;

  @Column()
  tipoFrete: number;

  @Column()
  custoFrete: number;

  @Column()
  custoOutros: number;

  @Column()
  custoComodato: number;

  @Column()
  cota: number;

  @Column()
  prazoMeMaxProg: number;

  @Column()
  bloquearLimite: number;

  @Column()
  brasCentroCusto: string;

  @Column()
  brasNomCCusto: string;

  @Column()
  brasGerente: number;

  @Column()
  brasLocal: string;

  @Column()
  diasBase: number;

  @Column()
  qtdeFuncionario: number;

  @Column()
  contribuinteIcms: number;

  @Column()
  aliquotaIss: number;

  @Column()
  aliquotaInss: number;

  @Column()
  deduzIss: number;

  @Column()
  deduzInss: number;

  @Column()
  parcelasProgramas: number;

  @Column()
  bancoLote: number;

  @Column()
  bancoAgencia: string;

  @Column()
  bancoNomeAgencia: string;

  @Column()
  dptoId: number;

  @Column()
  iva: number;

  @Column()
  classificao: string;

  @Column()
  faixa: number;

  @Column()
  irpj: number;

  @Column()
  ipiSuspenso: number;

  @Column()
  zonaLivreComercio: number;

  @Column()
  substitutoTributario: number;

  @Column()
  percetualComissao: number;

  @Column()
  descontoSuframa: number;

  @Column()
  estimativaSimples: number;

  @Column()
  retencaoNFServico: number;

  @Column()
  incentivoSuframa: number;

  @Column()
  aliqPisSuframa: number;

  @Column()
  aliqConfis: number;

  @Column()
  faturamentoParcial: number;

  @Column({ name: "naoSugerirDescOrgPub" })
  naoSugerirDescOrgPub: boolean;

  @Column()
  ramal2: string;

  @Column()
  vctoPelaEntrega: number;

  @Column()
  reduzirBase: number;

  @Column()
  inscricaoMunicipal: string;

  @Column()
  agrupamentoMatriz: number;

  @Column()
  dataInativacao: Date;

  @Column()
  enviarSms1: number;

  @Column()
  enviarSms2: number;

  @Column()
  sitCadastralRf: number;

  @Column()
  entregaDificilAcesso: number;

  @Column()
  dataUltimoSdr: Date;

  @Column()
  isentoiPi: number;

  @Column()
  regimeEspecial: number;

  @Column()
  reduzMerenda: number;

  @Column()
  reduzSicobe: number;

  @Column()
  sitTributariaIpi: number;

  @Column()
  dda: number;

  @Column()
  naoPermitirNotaCfop: number;

  @Column()
  permEmissaoValeCli: number;

  @Column()
  prazoConcederDesconto: string;

  @Column()
  diasDescontoBoleto: number;

  @Column()
  percenCargaMediaMt: number;

  @Column()
  filialFaturamento: number;

  @Column()
  agrupamentoAutomatico: number;

  @Column()
  agrupDiasGerarTit: number;

  @Column()
  agrupQuandoGerar: number;

  @Column()
  nomeRelatorios: string;

  @Column()
  percentualDescBoleto: number;

  @Column()
  codValidadeConsCred: number;

  @Column()
  proEmprego: number;

  @Column()
  permiteDistribuir: number;

  @Column()
  geraDescOrgaoPublic: number;

  @Column()
  idVendedorSubstituto: number;

  @Column()
  ideCodigo: number;

  @Column()
  tipoSugestaoFrete: number;

  @Column()
  bloqueiaFactoring: number;

  @Column()
  tagPedido: number;

  @Column()
  retencaoIrMunicipal: number;

  @Column()
  retencaoIrFundacao: number;

  @Column()
  whatsApp: string;

  @Column()
  codigoIntegracao: number;

  @Column()
  controle: string;

  @Column()
  timestamp: Date;
}