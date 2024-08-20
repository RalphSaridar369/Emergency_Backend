import { AppDataSource } from "../../data-source";
import { Volunteer } from "../models/volunteer";

export const VolunteerRepository = AppDataSource.getRepository(
  Volunteer
).extend({
  findByID: async function (id: number): Promise<Volunteer | null> {
    return this.findOne({
      where: {
        volunteer_id: id,
      },
    });
  },
});
