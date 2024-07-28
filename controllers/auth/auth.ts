export const userController = (req, res) => {
  res.status(200).json({ user: "from controller" });
};
