import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_enviados")
export class EmailEnviado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  tipo: string;

  @Column({ type: "jsonb" })
  data: Record<string, any>;

  @CreateDateColumn({
    name: "criado_em",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  criadoEm: Date;
}