import { AppDataSource } from "../../data-source";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user";

export default class AuthService {
  readonly userRepository: typeof UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async registerUser(data: any) {
    await AppDataSource.transaction(async (manager) => {
      const userRepo = this.userRepository;
      const exists = await userRepo.findByEmail(data.email);

      if (exists) throw "User with exact email already exists";

      const user = userRepo.create({
        email: data.email,
        phone_number: data.number,
        password: data.password,
      });

      await userRepo.save(user);
    });
  }

  async loginUser(data: any): Promise<User> {
    return await AppDataSource.transaction(async (manager) => {
      console.log("data: ", data);
      const userRepo = this.userRepository;
      const exists = await userRepo.findByEmail(data.email);

      if (!exists) throw "User incorrect email";

      const user = await userRepo.findOne({
        where: {
          email: data.email.toLowerCase(),
          password: data.password,
        },
      });

      console.log(user);

      if (!user) throw "User incorrect password";

      return user;
    });
  }
}
