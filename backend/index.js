const express = require("express")
const app = express()
const todoROuter = require("./routes/todoRoutes");

app.use("/api/todos", todoROuter)

const port = 5000;
app.listen(port, ()=>{
    console.log("connected on port", port)
})