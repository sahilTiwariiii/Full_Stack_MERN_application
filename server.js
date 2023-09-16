const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connDB = require('./config/db')
const path = require('path')

// env config
dotenv.config()
// router import
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoutes')
// mongoodb connection
connDB()
// rest object
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// static files

app.use(express.static(path.join(__dirname,'./client/build')))

// routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// PORT
const PORT = process.env.PORT || 8080
// listen
app.listen(PORT, () => {
    console.log(`Server running on port no ${PORT}`)
})  