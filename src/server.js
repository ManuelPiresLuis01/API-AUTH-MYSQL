import app from "./app.js"
import dotenv from "dotenv"

dotenv.config()

const PORT = 3000
const RUNING = ()=>{
    console.log("server runing...")
}

app.listen(PORT,RUNING)