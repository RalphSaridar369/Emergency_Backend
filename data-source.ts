import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME || "your-username",
  password: process.env.DB_PASSWORD || "your-password",
  database: process.env.DB_NAME || "your-database",
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, "src/entities/**/*.js")],
  migrations: [path.join(__dirname, "src/migrations/**/*.js")],
});
