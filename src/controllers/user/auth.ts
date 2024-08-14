import { User } from "../../models/user";
import AuthService from "../../services/auth";

export const login = async (req, res) => {
  try {
    const authService: AuthService = req.container.resolve("authService");
    const user: User = await authService.loginUser(req.body);
    console.log("user: ", user);
    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
};

export const register = async (req, res) => {
  try {
    const authService: AuthService = req.container.resolve("authService");
    await authService.registerUser(req.body);
    res.status(200).json({ user: "registered user" });
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
};
