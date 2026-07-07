import "reflect-metadata";
import { DataSource } from "typeorm";
import { env } from "../config/env";

export const AppDataSource = new DataSource({
  type: "mysql", // ou postgres
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,

  entities: ["src/database/entities/**/*.{ts,js}"],
  migrations: ["src/database/migrations/*.{ts,js}"],

  synchronize: false,
  logging: false,
});