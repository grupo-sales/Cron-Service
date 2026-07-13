import { AppDataSource } from "./data-source";
import { PostgresDataSource } from "./data-source-postgres";

export async function initDatabase() {
  await AppDataSource.initialize();
  await PostgresDataSource.initialize();
  console.log("📦 Database connected");
}