import Navbar from '@/pages/components/navbar';
import ProjectCard from './projectCard';
import Footer from '@/pages/components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { projectList } from '@/pages/Store/auth';
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



export default function Page() {
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state
    const [projectsList, setProjects] = useRecoilState(projectList);

    async function getAllprojectData() {
        setIsLoading(true); // Set isLoading to true before making the API call
        const result = await fetch('/api/project/getprojects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await result.json();
        setProjects(data.data);
    }

    useEffect(() => {
        getAllprojectData();
    }, []);


    return (
        <>
            <div className="sm:w-9/12 w-full m-auto px-5">
                <div className="projectContaienr">
                    <div className="mainHeading mb-14">
                        <h1 className="mainHead text-3xl text-center my-12">Projects</h1>
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
                                        <ProjectCard key={index} project={project} index={index} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
