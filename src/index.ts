import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"


const app: Express = express();


dotenv.config();


app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))





app.listen(process.env.PORT, ()=>{

    console.log(`server is running ${process.env.PORT}`);
})







