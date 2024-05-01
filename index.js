require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


app.use(cors())
app.use(require('./routers/Auto.route'))
app.use(require('./routers/user.route'))



mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Сервер включен");
    app.listen(2000,()=>{
        console.log('Подключено');
    })
})
.catch((error)=>{
    console.log("Ошибка подключения", error);
})