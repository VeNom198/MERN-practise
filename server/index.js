import express from "express";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";
import { connectDB } from "./config/mongoose.js";
import { router } from "./routes/route.js";
import fs, { createWriteStream } from "fs";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/upload", express.static("./upload"));
app.use("/api", router);

// app.get("/images/:id", (req, res) => {
//   const id = req.params.id;
//   const file = fs.readFile(`../images/${id}`);
//   console.log("getting image", id);
//   createWriteStream(file).pipe(res);
//   res.on("finish", () => {
//     res.end();
//   });
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
