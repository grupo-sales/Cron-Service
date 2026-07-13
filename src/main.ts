import "reflect-metadata";
import { logger } from "./config/logger";
import { app } from "./app";
import { startCronJobs } from "./cron";
import { initDatabase } from "./database";

async function bootstrap() {
  try {
    await initDatabase();

    logger.info("DB conectado");

    startCronJobs();

    app.listen(3000, () => {
      logger.info("Servidor rodando");
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

bootstrap();