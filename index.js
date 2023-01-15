import express from "express";
import cors from "cors";
import TodoRoute from "./routes/TodoRoute.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(TodoRoute);
 
app.listen(3006, ()=> console.log('Server up and running...'));