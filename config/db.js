const mongoose = require("mongoose");

// database 
const database = ()=>  mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,

        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    })
    // .connect(process.env.DATABASE_CLOUD,{})
    .then(()=>console.log('db connected'))

   module.exports = database