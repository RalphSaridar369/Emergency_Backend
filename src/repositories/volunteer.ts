import { AppDataSource } from "../../data-source";
import { Volunteer } from "../models/volunteer";

export const UserRepository = AppDataSource.getRepository(Volunteer);
