import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>docker is awesome 4< from docker compose/h1>")
})
app.get('/about',(req,res)=>{
    res.send(process.env.API_KEY)
})

app.listen(5002,()=>{
    console.log("server running on 5002!")
}) 