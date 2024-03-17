import prisma from '@/db/db';

export default async function handler(req, res) {
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
                gihubLink: req.body.gihubLink,
                projectOverview: req.body.projectOverview,
                feature: req.body.feature,
                techStack: req.body.techStack,
            }
        });
        return res.status(200).json({ message: "Project created successfully", data: result });
    } catch (err) {
        console.log("this is the error here ", err);
        return res.json({ message: err.message });
    }
}