import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/UserRoutes.js";
import messageRouter from "./routes/MessageRoutes.js";

// create express app and http server

const app = express()
const server = http.createServer(app) // it supports socket io

// middleware setup

app.use(express.json({limit: "4mb"})); // img only 4mb limit
app.use(cors());

// routes setup
app.use("/api/status", (req, res) => res.send("Server is Live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter)

// connect to mongoDB

await connectDB();

const PORT = process.env.PORT || 5000; // either choose a port from env var or start in 5000
server.listen(PORT, () => console.log("Server is running on PORT: " + PORT));