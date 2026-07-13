import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const isProduction = process.env.PRODUCTION === "true";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,

  entities: [
    isProduction
      ? "dist/database/entities/postgres/**/*.js"
      : "src/database/entities/postgres/**/*.ts",
  ],

  migrations: [
    isProduction
      ? "dist/database/migrations/postgres/**/*.js"
      : "src/database/migrations/postgres/**/*.ts",
  ],

  synchronize: false,
  logging: false,
});