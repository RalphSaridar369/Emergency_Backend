import { AppDataSource } from "../../data-source";
import { User } from "../models/user";

export const UserRepository = AppDataSource.getRepository(User);
