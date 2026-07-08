import cron from "node-cron";
import { EnviarEmailCliente } from "../services/pedidos/enviarEmailCliente";

export function startCronJobs() {
  cron.schedule("* 8-18 * * *", () => {
    EnviarEmailCliente.execute();
  });
}