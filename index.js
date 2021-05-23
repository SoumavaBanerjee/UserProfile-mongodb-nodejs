import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.info(`app running on ${environment} mode at port ${PORT} `);
});
