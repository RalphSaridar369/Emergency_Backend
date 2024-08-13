import { AppDataSource } from "../../data-source";
import { Volunteer } from "../models/volunteer";

export const VolunteerRepository = AppDataSource.getRepository(Volunteer);
