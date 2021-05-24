import mongoose from "mongoose";

export const connectLocalDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_LOCAL_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    if (process.env.NODE_ENV === "development")
      console.info(`connected to db at ${process.env.MONGO_LOCAL_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
