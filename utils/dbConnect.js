const mongoose = require('mongoose');

export default function connectToDataBase(){
    mongoose.connect("mongodb+srv://Suraj:Zebronic%40123@atlascluster.aai2jhm.mongodb.net/myPortfolio").then(()=>{
        console.log("Database is Sucessfull Connected");
    }).catch((err)=>{
        console.log("The error is ", err);
    });
}
