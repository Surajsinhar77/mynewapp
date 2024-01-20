const mongoose = require('mongoose')
const database_url = process.env.MONGODB_URI;

export default function connectToDataBase(){
    mongoose.connection(database_url).then(()=>{
        console.log("Database is Sucessfull Connected");
    }).catch((err)=>{
        console.log("The error is ", err);
    });
}
