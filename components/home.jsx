import { FaLinkedin, FaGithub, FaDiscord , FaCode} from "react-icons/fa";
import Link from 'next/link';
import ProjectCard from "@/pages/projects/projectCard";
import Blogs from "./Blogs";
import projectList from '@/pages/projectList.json';
import { useState , useEffect} from "react";
import axios from "axios";

export default function Index() {

    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    const [ProjectList, setProjectList] = useState([]);

    async function getAllprojectData() {
        setIsLoading(true); // Set isLoading to true before making the API call
        const result = await fetch('https://mynewapp-bbsm.onrender.com/api/project/getprojects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        setProjectList(data.data);
    }

    useEffect(() => {
        getAllprojectData();
    }, []);

    // const ProjectList = projectList;

    const BlogsContent = [
        {
            userId: 1,
            id: 0,
            title: "Converting a Laravel Inertia App from Mix to Vite",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            userId: 1,
            id: 1,
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        },
    ];

    return (
        <>
            <div>
                <div className="myAbout p-5 bg-dark text-white rounded">
                    <h3 className="text-2xl my-5 ">Hi &rsquo; Im Suraj.</h3>
                    <p className="font-light text-lg tracking-wide leading-relaxed text-justify ">
                        <span className="my-6">
                            I am a software developer with a passion for web development and data structures and algorithms. I have     skills in MERN stack (MongoDB, Express, React, and Node.js) and I am learning Next.js to create dynamic     and interactive web applications. I have also completed several online courses and projects on various  topics such as HTML, CSS, JavaScript, Bootstrap, RESTful APIs, authentication, and deployment.
                        </span>
                    </p>
                    <h2 className="mt-5 text-xl font-light text-green-700">
                        Connect Me
                    </h2>
                    <div className="SocalLinks grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-auto">
                        <Link  href="https://www.linkedin.com/in/kumar-suraj-sk/" className="my-3   bottom-1 py-2 px-2 rounded-lg m-auto">  <FaLinkedin className="text-blue-700 text-3xl"/>  </Link>

                        <Link  href="https://github.com/Surajsinhar77" className=" my-3   bottom-1 py-2 px-2 rounded-lg m-auto">  <FaGithub className="text-gray-200 text-3xl"/>  </Link>

                        <Link  href="/" className="my-3   bottom-1 py-2 px-2 rounded-lg m-auto">  <FaDiscord className="text-blue-700 text-3xl"/>  </Link>

                        <Link  href="/" className=" my-3   bottom-1 py-2 px-2 rounded-lg m-auto">  <FaCode className=" text-white text-3xl"/>  </Link>
                    </div>
                    <div className="codingPlateformLink">

                    </div>
                </div>

                <div className="ContainerForHomePage mt-5 w-full flex justify-between">
                    <div className="latestProject w-full">
                        <h3 className="text-2xl text-white underline">Latest Project</h3>
                        <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
                        <div className="mx-2 py-9 grid grid-cols-1 md:grid-cols-2 gap-6 m-auto xl:grid-cols-3">
                        {
                            ProjectList.map((project,index)=>{
                                    return <ProjectCard key={index} project={project} index={index}/>
                                }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
