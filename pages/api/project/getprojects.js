import prisma from '@/pages/db/db';
import { runCors } from '@/pages/lib/init-middleware';

export default async function handler(req, res) {
    runCors(req, res);
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

// pages/api/project/getprojects.js
// This is the API route that fetches the project data from the database. It uses the Prisma client to query the database and return the project data as a JSON response. The runCors middleware is used to enable CORS for the API route.
