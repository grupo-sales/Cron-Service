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
      ? "dist/database/entities/mysql/**/*.js"
      : "src/database/entities/mysql/**/*.ts",
  ],

  migrations: [
    isProduction
      ? "dist/database/migrations/mysql/**/*.js"
      : "src/database/migrations/mysql/**/*.ts",
  ],

  synchronize: false,
  logging: false,
});