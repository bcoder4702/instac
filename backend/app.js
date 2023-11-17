import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/user",router)

app.use("/api/blog",blogRouter)

mongoose.connect('mongodb+srv://bverma4702:GGdfA0vh8eMYXUUk@cluster0.exwidlt.mongodb.net/instaclone?retryWrites=true&w=majority'
).then(()=>app.listen(5000)).then(()=>console.log("Connected to Database")).catch((err)=>console.log(err));
 