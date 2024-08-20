import { login, register } from "../../controllers/volunteer/auth";

const express = require("express");
const router = express.Router();

router.post("/auth", login);
router.post("/auth/register", register);

export default router;
