import { AppDataSource } from "../../data-source";

export default class AuthService {
  readonly userRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async registerUser(data: any) {
    const dataSource = await AppDataSource.initialize();
    await dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(this.registerUser);
      const exists = await userRepo.findOne({
        where: {
          email: data.email.toLowerCase(),
        },
      });

      if (exists) throw "User with exact email already exists";

      const user = userRepo.create({
        email: data.email,
        number: data.number,
        password: data.password,
      });

      await userRepo.save(user);
    });
  }
}
