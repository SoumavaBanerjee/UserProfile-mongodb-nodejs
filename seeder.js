import mongoose from "mongoose";
import { connectLocalDB } from "./config/db";

import dotenv from "dotenv";
import User from "./model/user.model.js";
import mockUsers from "./data/user";

dotenv.config();

connectLocalDB();

/**
 * imports seeder data to MongoDB Atlas
 */
const importData = async () => {
  try {
    // delete stuff before inserting new stuff
    await User.deleteMany();

    // insert new stuff
    await User.insertMany(mockUsers);

    console.info("data imported");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// destroy all data in mongoDB database
const destroyData = async () => {
  try {
    // delete stuff
    await User.deleteMany();
    console.info("data destroyed");
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
