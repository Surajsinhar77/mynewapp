import prisma from '@/pages/about/db/db';
import { runCors } from '@/pages/about/lib/init-middleware';


export default async function handler(req, res) {
    await runCors(req, res);
    try {
        const userExist = await prisma.Projects.findUnique({
            where: { projectName: req.body.projectName }
        });

        if (userExist) {
            return res.status(404).json({ message: "Project exist", userExist: true });
        }

        const result = await prisma.Projects.create({
            data: {
                projectName: req.body.projectName,
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                projectsTags: req.body.projectsTags,
                projectLink: req.body.projectLink,
                githubLink: req.body.githubLink,
                projectOverview: req.body.projectOverview,
                feature: req.body.feature,
                imageFolderName: req.body.imageFolderName,
                techStack: req.body.techStack,
                youtubeLink: req.body.youtubeLink??"",
            }
        });
        return res.status(200).json({ message: "Project created successfully", data: result });
    } catch (err) {
        console.log("this is the error here ", err);
        return res.status(403).json({ message: err.message });
    }
}