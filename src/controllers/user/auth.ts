import {
  UserLoginBodyDTO,
  UserLoginDTO,
  UserRegisterBodyDTO,
} from "../../dto/user";
import AuthService from "../../services/auth";
import { BadValidationError } from "../../utils/errors";
import { validateDTO } from "../../utils/validateBody";

export const login = async (req, res) => {
  try {
    const authService: AuthService = req.container.resolve("authService");
    const userDto = new UserLoginBodyDTO(req.body);

    await validateDTO<UserLoginBodyDTO>(userDto);

    const user: UserLoginDTO = await authService.loginUser(req.body);
    res.status(200).json(user);
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

    const userDto = new UserRegisterBodyDTO(req.body);

    await validateDTO<UserRegisterBodyDTO>(userDto);
    await authService.registerUser(req.body);
    res.status(200).json({ user: "registered user" });
  } catch (e) {
    console.error(e);
    if (e instanceof BadValidationError) {
      res.status(422).json(e.error);
    } else {
      res.status(500).json(e);
    }
  }
};
