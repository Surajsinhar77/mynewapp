import prisma from '@/db/db';

export default async function handler(req, res) {
    // console.log("this is the body ", req.body);
    try {
        const projects = await prisma.projects.findMany();

        if (!projects) {
            return res.status(404).json({ message: "Not Project exist", projectExist: false });
        }

        return res.status(200).json({ message: "All Project fetch successfully", data: projects });
    } catch (err) {
        console.log("this is the error here ", err);
        return res.status(403).json({ message: err.message });
    }
}
