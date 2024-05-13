import express from "express";
import productRoutes from "./routes/productRoutes.js"
const app = express()
const port = 8008

app.use('/api', productRoutes)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })