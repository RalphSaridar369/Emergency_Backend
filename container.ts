// container.js
import { createContainer, asClass, asValue } from "awilix";
import VolunteerService from "./src/services/volunteer";
import AuthService from "./src/services/auth";
import { UserRepository } from "./src/repositories/user";
import { AppDataSource } from "./data-source";
import { VolunteerRepository } from "./src/repositories/volunteer";

const container = createContainer();

container.register({
  volunteerService: asClass(VolunteerService).singleton(),
  authService: asClass(AuthService).singleton(),
  userRepository: asValue(UserRepository),
  volunteerRepository: asValue(VolunteerRepository),
});

module.exports = container;
