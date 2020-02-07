require('dotenv').config()
const mongoose =  require('./config/database')
const express = require('express')
const cors = require('cors')
const router = require('./config/routes')

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Welcome to url-shortner')
})

app.use('/shortservices', router)

app.listen(port, () => {
    console.log('Connected at Port:',port)
})