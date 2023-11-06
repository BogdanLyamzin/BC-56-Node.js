import express from "express";

import authController from "../../controllers/auth-controller.js";

import {validateBody} from "../../decorators/index.js";

import { userSignupSchema, userSigninSchema, userEmailSchema } from "../../models/User.js";

import {authenticate} from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), authController.signup)

authRouter.post("/verify", validateBody(userEmailSchema), authController.resendVerifyEmail)

authRouter.get("/verify/:verificationCode", authController.verify)

authRouter.post("/signin", validateBody(userSigninSchema), authController.signin)

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout);

export default authRouter;