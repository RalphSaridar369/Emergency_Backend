import { AppDataSource } from "../../data-source";
import { UserLoginDTO } from "../dto/user";
import { VolunteerLoginDTO } from "../dto/volunteer";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user";
import { VolunteerRepository } from "../repositories/volunteer";
import { comparePassword, generatePassword } from "../utils/password";

export default class AuthService {
  readonly userRepository: typeof UserRepository;
  readonly volunteerRepository: typeof VolunteerRepository;

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
        password: generatePassword(data.password),
      });

      await userRepo.save(user);
    });
  }

  async loginUser(data: any): Promise<UserLoginDTO> {
    return await AppDataSource.transaction(async (manager) => {
      const userRepo = this.userRepository;
      const exists = await userRepo.findByEmail(data.email);

      if (!exists) throw "User incorrect email";
      else if (!comparePassword(data.password, exists.password))
        throw "User incorrect password";

      let user = await userRepo.findOne({
        where: {
          email: data.email.toLowerCase(),
        },
      });

      if (!user) throw "User incorrect password";

      let userDto = new UserLoginDTO(user);

      return userDto;
    });
  }

  async registerVolunteer(data: any) {
    await AppDataSource.transaction(async (manager) => {
      const volunteerRepo = this.volunteerRepository;
      const exists = await volunteerRepo.findByID(data.volunteer_id);

      if (exists) throw "Volunteer with exact email already exists";

      const volunteer = volunteerRepo.create({
        volunteer_id: data.volunteer_id,
        password: generatePassword(data.password),
      });

      await volunteerRepo.save(volunteer);
    });
  }

  async loginVolunteer(data: any): Promise<VolunteerLoginDTO> {
    return await AppDataSource.transaction(async (manager) => {
      const volunteerRepo = this.volunteerRepository;
      const exists = await volunteerRepo.findByID(data.volunteer_id);

      if (!exists) throw "Volunteer incorrect email";
      else if (!comparePassword(data.password, exists.password))
        throw "Volunteer incorrect password";

      let volunteer = exists;

      if (!volunteer) throw "User incorrect password";

      let volunteerDTO = new VolunteerLoginDTO(volunteer);

      return volunteerDTO;
    });
  }
}
