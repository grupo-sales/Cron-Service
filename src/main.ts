import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import { logger } from "./config/logger";
import { app } from "./app";
import { startCronJobs } from "./cron";

async function bootstrap() {
  try {
    await AppDataSource.initialize();

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