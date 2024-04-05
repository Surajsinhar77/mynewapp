import Navbar from '@/components/navbar';
import ProjectCard from './projectCard';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { projectList } from '@/Store/auth';
import { useRecoilState } from 'recoil';
// Import the loader component
// import Loader from './Loader';

function Loader() {
    return (
        <div className="loader">
            <div className="loader__icon"></div>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch project data from your API route (replace with your actual endpoint)
    // i want to use production url
    const response = await fetch('https://mynewapp-peach.vercel.app/api/project/getprojects');
    
    const data = await response.json();
    // Return the fetched data as props
    return { props: { projects: data.data } };
}

export default function Page({projects}) {
    console.log("project index page ", projects)
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state
    const [projectsList, setProjects] = useRecoilState(projectList);

    useEffect(() => {
        setProjects(projects);
    },[]);

    return (
        <>
            <div className="sm:w-9/12 w-full m-auto px-5">
                <Navbar />
                <div className="projectContaienr">
                    <div className="mainHeading mb-14">
                        <h1 className="mainHead text-3xl underline my-12">Projects</h1>
                        <h4 className="subheading text-xl mt-5">
                            Some of my spare time tinkering
                        </h4>
                    </div>

                    <div className="pageImgAndAbout ">
                        {/* Conditional rendering based on isLoading state */}
                        
                            <div className="mainImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                                {
                                    projectsList.map((project, index) => {
                                        console.log("asdasdasdhjasdjkashdkjas")
                                        return (
                                            <ProjectCard key={index} project={project} index={index}/>
                                        );
                                    })
                                }
                            </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
