import express from "express";
import cors from "cors";
import 'dotenv/config';
import authRoutes from "../src/routes/authRoutes.js"
import adminRoutes from "./routes/employeeRoutes.js"


const app = express();

app.use(express.json());
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);
app.get("/",(req,res) => {
    res.status(200).send("API Working succesfully");
})


app.listen(5000,() => {
    console.log("Server started running on PORT: 5000");
})