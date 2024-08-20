import {
  VolunteerLoginBodyDTO,
  VolunteerLoginDTO,
  VolunteerRegisterBodyDTO,
} from "../../dto/volunteer";
import AuthService from "../../services/auth";
import { BadValidationError } from "../../utils/errors";
import { validateDTO } from "../../utils/validateBody";

export const login = async (req, res) => {
  try {
    const authService: AuthService = req.container.resolve("authService");
    const volunteerDTO = new VolunteerLoginBodyDTO(req.body);

    await validateDTO<VolunteerLoginBodyDTO>(volunteerDTO);

    const volunteer: VolunteerLoginDTO = await authService.loginVolunteer(
      req.body
    );
    res.status(200).json(volunteer);
  } catch (e) {
    console.error(e);
    if (e instanceof BadValidationError) {
      res.status(422).json(e.error);
    } else {
      res.status(500).json(e);
    }
  }
};

export const register = async (req, res) => {
  try {
    const authService: AuthService = req.container.resolve("authService");

    const volunteerDTO = new VolunteerRegisterBodyDTO(req.body);

    await validateDTO<VolunteerRegisterBodyDTO>(volunteerDTO);
    await authService.registerVolunteer(req.body);
    res.status(200).json({ user: "registered volunteer" });
  } catch (e) {
    console.error(e);
    if (e instanceof BadValidationError) {
      res.status(422).json(e.error);
    } else {
      res.status(500).json(e);
    }
  }
};
