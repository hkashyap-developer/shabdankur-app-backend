// purpose of this file is to create models

// Loading environment variables. Don't forget to update the variable in the .env file

if(process.env.PORT != "production") {
    require("dotenv").config();
}

// importing mongoose 

const mongoose =require("mongoose");

// connecting to database

async function connectToDb(){
    try {
        await mongoose.connect(process.env.DB_URL);  // connecting to the URL defined in environment variables
        console.log("connected to database.");
    }
    catch (err) {
        console.log(err);
    }
}

// exporting the function to use in server.js

module.exports = connectToDb