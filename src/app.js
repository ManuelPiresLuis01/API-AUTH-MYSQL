import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.json({message:"API RUNING..."})
})

export default app