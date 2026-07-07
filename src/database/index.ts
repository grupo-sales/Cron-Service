import { AppDataSource } from "./data-source";

export async function initDatabase() {
  await AppDataSource.initialize();
  console.log("📦 Database connected");
}