import express from "express"
import { config } from "dotenv"
import mongoose from "mongoose"

const app = express()

app.get('/', async (req, res) => {
    res.send("Hello World!")
  })

  app.listen(3000, () => {
    console.log("Server has started! Open http://localhost:3000")
  })