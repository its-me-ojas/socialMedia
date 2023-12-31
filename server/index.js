import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRouter from './routes/posts.js'

const app = express()

app.use('/posts', postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Crestfallen:IwbtbvomforArshia@cluster0.h8ygkqs.mongodb.net/'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server is up and running on port : ${PORT}`))).catch(e => console.log(e))

