import prisma from '@/db/db';
import cors from '../middleware/cors';

export default async function handler(req, res) {
    // console.log("this is the body ", req.body);
    await cors(req, res);
    try {
        const projects = await prisma.projects.findUnique({
            where :{id: req.body.id}
        });

        if (!projects) {
            return res.status(404).json({ message: "Not Project exist", projectExist: false });
        }

        return res.status(200).json({ message: "All Project fetch successfully", data: projects });
    } catch (err) {
        console.log("this is the error here ", err);
        return res.status(403).json({ message: err.message });
    }
}
