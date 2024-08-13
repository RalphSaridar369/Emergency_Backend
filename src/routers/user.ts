import authRouter from "./user/auth";

const express = require("express");
const router = express.Router();

router.use("/user", authRouter);

export default router;
