import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("controle_cron")
export class ControleCron {
  @PrimaryColumn({ type: "int", default: 1 })
  id: number;

  @Column({ type: "datetime" })
  ultima_execucao: Date;
}