import AuthService from "../../services/auth";

export const login = async (req, res) => {
  const authService: AuthService = req.container.resolve("authService");
  res.status(200).json({ user: "from user controller" });
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
