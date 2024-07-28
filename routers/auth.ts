import { userController } from "../controllers/auth/auth";

const express = require("express");
const router = express.Router();

// router.get("/user", (req, res) => {
//   res.status(200).json({ user: "user" });
// });

router.get("/user", userController);

export default router;
