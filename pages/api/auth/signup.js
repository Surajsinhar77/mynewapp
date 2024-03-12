import prisma from '@/db/db'; //should be same name from the export  
import bcrypt from 'bcrypt';

export default async function handler(req, res){
	try{
		const userExist = await prisma.users.findUnique({
			where:{email: req.body.email}
		});

		if(userExist){
			return res.json({message: "user already exist", userExist:true});
		}

		const hashPassword = await bcrypt.hash(req.body.password, 10);

		const response = await prisma.users.create({
			name: req.body.name,
			email : req.body.email,
			password: hashPassword,
			role : "admin",
		})
		console.log("check yours database ");
		return res.json({message: "account is sucessfull created" ,res : response});
	}catch(err){
		console.log("This is the error from the",err.message);
		return res.json({message: err.message});
	}
}