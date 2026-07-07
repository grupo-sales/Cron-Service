import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne,
  JoinColumn
} from "typeorm";
import { VCliente } from "./VCliente";

@Entity("pedido_rastreamento")
export class PedidoRastreamento {
  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  id: number;

  @Column({ type: "int" })
  idPedido: number;

  @Column({ type: "int" })
  idFilial: number;

  @Column({ type: "int" })
  idCliente: number;

  @ManyToOne(() => VCliente, (cliente) => cliente.id)
  @JoinColumn({ name: "idCliente" })
  cliente: VCliente;

  @Column({ type: "varchar", length: 14 })
  clienteDocumento: string;

  @Column({ type: "datetime" })
  dataPedido: Date;

  @Column({ default: 0 })
  retira: boolean;

  @Column({ type: "varchar", length: 25, nullable: true })
  idNota: string;

  @Column({ type: "int", nullable: true })
  numeroNota: number | null;

  @Column({ type: "datetime", nullable: true })
  dataEmissao: Date | null;

  @Column({ type: "datetime", nullable: true })
  dataSeparacao: Date | null;

  @Column({ type: "json", nullable: true })
  dataDeSaida: any | null;

  @Column({ type: "datetime", nullable: true })
  dataEntrega: Date | null;

  @Column({ type: "datetime", precision: 4, nullable: true })
  ultimoEmailEnviadoEm: Date | null;

  @Column({ 
    type: "enum", 
    enum: ["recebido", "nota_fiscal", "em_separacao", "saiu_para_entrega", "pronto_para_retirada", "entregue", "retirado"],
    nullable: true 
  })
  ultimaEtapaEmail: string | null;

  @CreateDateColumn({ type: "datetime", precision: 4 })
  createdAt: Date;

  @UpdateDateColumn({ type: "datetime", precision: 4 })
  updatedAt: Date;

  @Column({ type: "int", nullable: true })
  situacaoNota!: number | null;

  @Column({ type: "datetime", precision: 4, nullable: true })
  dataCancelamento: Date | null;
}