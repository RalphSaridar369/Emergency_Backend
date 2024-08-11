// container.js
import { createContainer, asClass } from "awilix";
import VolunteerService from "./src/services/volunteer";

const container = createContainer();

container.register({
  VolunteerService: asClass(VolunteerService).singleton(),
});

module.exports = container;
