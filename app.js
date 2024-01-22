//pasa las variables de entorno a process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo.js')
const PORT = process.env.PORT || 3000
//utiliza los middlewars cors y json para manejar solicitudes http de origenes remotos y recibir informacion en formato JSON
app.use(cors())
app.use(express.json())

app.use('/api/1.0', require('./app/routes/index.js'))

dbConnect()
app.listen(PORT, () =>{
    console.log('API lista por el puerto ', PORT);
})