import express from 'express';
import {config} from 'dotenv';
import cors from 'cors'
import friendsRouter from './routes/friends.js'
config();

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("views"))

app.use('/friends',friendsRouter)


app.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT)
})
