import { AppDataSource } from "../../data-source";
import { User } from "../models/user";

export const UserRepository = AppDataSource.getRepository(User).extend({
  findByEmail: async function (email: string): Promise<User | null> {
    return this.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });
  },
});
