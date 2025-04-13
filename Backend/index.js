import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

const _dirname = path.resolve()


app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname , "frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});