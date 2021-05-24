import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { connectLocalDB } from "./config/db.js";

import { homeRouter } from "./routes/home.js";
import { profileRouter } from "./routes/profile.js";

import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";

dotenv.config();
connectLocalDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// middlewares
app.use(homeRouter);
app.use("/api", profileRouter);

// after all other routes
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(5000, () => {
  console.info(`app running on port ${PORT} `);
});
