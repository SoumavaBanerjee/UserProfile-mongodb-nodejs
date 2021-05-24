import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import User from "../model/profile.model.js";

/**
 * @description /Get  all profiles
 */
export const getProfile = asyncHandler(async (req, res, next) => {
  const profile = await User.find();
  if (!profile) {
    res.status(404);
    throw new Error("resource not found");
  }

  res.status(200).json(profile);
});

/**
 * @description /Post create a new user profile
 */
export const postProfile = asyncHandler(async (req, res, next) => {
  const { ID, name, email, phone, password } = req.body;

  const newProfile = await User.create({
    ID,
    name,
    email,
    phone,
    password,
  });

  if (newProfile) {
    res.status(201).json(newProfile);
  } else {
    res.status(500);
    throw new Error("Cannot create new user");
  }
});

/**
 * @description /PATCH Update data of existing user
 */

export const updateProfile = asyncHandler(async (req, res, next) => {
  const { id: _id } = req.params;
  const userInfo = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404);
    throw new Error("No user with given id found");
  }

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { ...userInfo, _id },
    {
      new: true,
    }
  );

  res.json(updatedUser);
});
