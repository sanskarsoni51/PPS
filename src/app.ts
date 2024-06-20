import express, {Request,Response, NextFunction } from "express";
import mongoose from "./mongo.js";
import { FormModel } from "./model.js";
import cors from 'cors';


const app = express();
app.use(express.json());

const corsOptions = {
    origin: true, // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"], // Include 'credentials' in the list of allowed headers
    credentials: true, // Allow credentials (cookies)
  };
  
  app.use(cors(corsOptions));

app.use((req: Request, res: Response, next: Function) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });


mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.post('/',async (req: Request, res: Response, next: NextFunction) => {
    const { Name,Email,Contact,Company,Socials,Industry,Designation} = req.body;
    const createdForm = await FormModel.create({ Name,Email,Contact,Company,Socials,Industry,Designation});
    res.status(201).json({
      message: "success",
      userId: createdForm._id,
    });
  });

app.get('/',async(req: Request, res: Response, next: NextFunction) => {
    const forms = await FormModel.find().exec();
    res.status(200).json({
        message:"success",
        data : forms
    });
})



const port = 3000;
app.listen(port,()=>{
    console.log(`server is running at the port ${port}`);
})