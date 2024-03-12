import { FaLinkedin, FaGithub, FaDiscord , FaCode} from "react-icons/fa";
import Link from 'next/link';
import ProjectCard from "../projects/projectCard";
import Blogs from "./Blogs";
import projectList from './../projectList.json';
export default function Index() {

    const ProjectList = projectList;

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
                <div className="myAbout p-5 bg-blue-100 rounded">
                    <h3 className="text-3xl mb-5">Hi &rsquo; Im Suraj.</h3>
                    <p className="font-light text-xl tracking-wide leading-relaxed text-justify">
                        <span>
                        I am a software developer with a passion for web development and data structures and algorithms. I have skills in MERN stack (MongoDB, Express, React, and Node.js) and I am learning Next.js to create dynamic and interactive web applications. I have also completed several online courses and projects on various topics such as HTML, CSS, JavaScript, Bootstrap, RESTful APIs, authentication, and deployment.
                        </span>
                        <br /><br />
                        <span>
                        I am currently looking for freelance opportunities in web development where I can apply my skills and knowledge to create innovative and user-friendly websites for clients. I have experience in working with different tools and platforms such as GitHub, Heroku, Netlify, Firebase, and AWS. I can also work with different databases such as MySQL, PostgreSQL, MongoDB, and Firebase.
                        </span>
                        <br /><br />
                        <span>
                        I am always eager to learn new technologies and systems that can enhance my development capabilities and broaden my horizons. I am interested in topics such as cloud computing, machine learning, artificial intelligence, blockchain, and cybersecurity. I also enjoy solving coding challenges and participating in hackathons.
                        </span>
                        <br /><br />
                        <span>
                        If you are interested in my work or want to collaborate with me, please feel free to contact me via email or LinkedIn. I look forward to hearing from you.
                        </span>
                    </p>
                    <h2 className="mt-5 text-2xl underline font-light text-green-700">
                        Connect Me
                    </h2>
                    <div className="SocalLinks grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-auto">
                        <Link  href="https://www.linkedin.com/in/kumar-suraj-sk/" className="my-3 bg-white border border-gray-300 bottom-1 py-2 px-2 rounded-lg m-auto">  <FaLinkedin className="text-blue-700 text-3xl"/>  </Link>

                        <Link  href="https://github.com/Surajsinhar77" className=" my-3 bg-white border border-gray-300 bottom-1 py-2 px-2 rounded-lg m-auto">  <FaGithub className="text-gray-700 text-3xl"/>  </Link>

                        <Link  href="/" className="my-3 bg-white border border-gray-300 bottom-1 py-2 px-2 rounded-lg m-auto">  <FaDiscord className="text-blue-700 text-3xl"/>  </Link>

                        <Link  href="/" className=" my-3 bg-white border border-gray-300 bottom-1 py-2 px-2 rounded-lg m-auto">  <FaCode className="text-gray-800 text-3xl"/>  </Link>
                    </div>
                    <div className="codingPlateformLink">

                    </div>
                </div>

                <div className="ContainerForHomePage mt-5 w-full flex justify-between">
                    <div className="latestProject w-full">
                        <h3 className="text-2xl">Latest Project</h3>
                        <div className="mx-2 mt-4 h-0.5 rounded-full bg-gray-300"></div>
                        <div className="mx-2 py-5 grid grid-cols-1 md:grid-cols-2 gap-6 m-auto xl:grid-cols-3">
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
