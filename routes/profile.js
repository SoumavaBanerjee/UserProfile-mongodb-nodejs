import express from "express";
import {
  getProfile,
  postProfile,
  updateProfile,
} from "../controller/profile.controller.js";
import { upload } from "../middlewares/storageStrategy.js";
const router = express.Router();

router.get("/profile", getProfile);
router.post("/profile/post", upload.single("profileImage"), postProfile);
router.patch(
  "/profile/update/:id",
  upload.single("profileImage"),
  updateProfile
);

export { router as profileRouter };
