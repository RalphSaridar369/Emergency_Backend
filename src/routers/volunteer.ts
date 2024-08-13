import authRouter from "./volunteer/auth";

const express = require("express");
const router = express.Router();

router.use("/volunteer", authRouter);

export default router;
