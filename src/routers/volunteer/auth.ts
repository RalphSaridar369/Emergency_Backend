import { login } from "../../controllers/volunteer/auth";

const express = require("express");
const router = express.Router();

router.get("/auth", login);

export default router;
