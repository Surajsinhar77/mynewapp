import prisma from '@/db/db';
import bcrypt from 'bcrypt';
import { runCors } from '@/lib/init-middleware';

export default async function handler(req, res) {
    await runCors(req, res);
    console.log("Sign in this is the request body ", req.body);
    try{
        const userExist = await prisma.Users.findUnique({
            where:{email: req.body.email}
        });

        if(!userExist){
            return res.status(404).json({message: "user not exist", userExist: false});
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userExist.password);
        if(passwordMatch){
            return res.status(200).json({message : "User login sucessfull" ,data: userExist });
        }

        return res.status(401).json({message: "passsword is invalid", userExist : false});
        
    }catch(err){
        console.log("this is the error here ",err);
        return res.json({message :err.message});
    }
}