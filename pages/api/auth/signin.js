import prisma from '@/db/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    try{
        const userExist = await prisma.users.findUnique({
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