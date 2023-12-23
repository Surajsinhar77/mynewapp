const mongoose = require('mongoose');

function connectToDataBase(){
    mongoose.connect('').then(()=>{
        console.log("Database is Sucessfull Connected");
    }).catch((err)=>{
        console.log("The error is ", err);
    })
}

export default connectToDataBase;