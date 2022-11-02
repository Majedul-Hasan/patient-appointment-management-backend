const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


// dotenv config
dotenv.config();
// app
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors
app.use(cors())

// routes 
app.get('/', (req, res)=>{
   res.send('hello from patient-appointment-management-server')

})

//port

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})