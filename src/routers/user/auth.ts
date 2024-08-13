import { login, register } from "../../controllers/user/auth";

const express = require("express");
const router = express.Router();

router.get("/auth", login);
router.post("/auth/register", register);

export default router;
