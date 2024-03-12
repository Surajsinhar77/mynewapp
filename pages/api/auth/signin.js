import prisma from '@/db/db';
const { PrismaClient } = require('@prisma/client');
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    try{
        const userExist = await prisma.users.findUnique({
            where:{email: req.body.email}
        });

        if(!userExist){
            return res.status(404).json({message: "user not exist", userExist: false});
        }

        const response = await prisma.users.findUnique({
            where:{email:req.body.email}
        });
        console.log("This is the response from the signin handler",response);
        return res.status(200).json({message : "User login sucessfull" ,data: response });
    }catch(err){
        console.log("this is the error here ",err);
        return res.json({message :err.message});
    }
}