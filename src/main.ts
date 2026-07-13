import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import { logger } from "./config/logger";
import { app } from "./app";
import { startCronJobs } from "./cron";
import { PostgresDataSource } from "./database/data-source-postgres";

async function bootstrap() {
  try {
    await AppDataSource.initialize();
    logger.info("MySQL conectado");

    await PostgresDataSource.initialize();
    logger.info("PostgreSQL conectado");

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