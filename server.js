import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Get all contactf</h1>')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`${port}:OK`)
})
