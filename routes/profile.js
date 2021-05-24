import express from "express";
import {
  getProfile,
  postProfile,
  updateProfile,
} from "../controller/profile.controller.js";

const router = express.Router();

router.get("/profile", getProfile);
router.post("/profile/post", postProfile);
router.patch("/profile/update/:id", updateProfile);

export { router as profileRouter };
