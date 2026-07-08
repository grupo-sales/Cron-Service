import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const isProduction = process.env.PRODUCTION === "true";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [
    isProduction
      ? "dist/database/entities/**/*.js"
      : "src/database/entities/**/*.ts",
  ],

  migrations: [
    isProduction
      ? "dist/database/migrations/**/*.js"
      : "src/database/migrations/**/*.ts",
  ],

  synchronize: false,
  logging: false,
});