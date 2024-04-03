import Navbar from '@/components/navbar';
import ProjectCard from './projectCard';
import Footer from '@/components/Footer';
import projectList from "@/pages/projectList.json";
import { useEffect, useState } from 'react';
import axios from 'axios';

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

    const [ProjectList, setProjectList] = useState([]);

    async function getAllprojectData() {
        setIsLoading(true); // Set isLoading to true before making the API call
        axios.get('/api/project/getprojects')
            .then((response) => {
                setProjectList(response.data.data);
            })
            .catch((error) => {
                console.log("this is the error ", error);
            })
            .finally(() => {
                setIsLoading(false); // Set isLoading to false after the API call is completed
            });
    }

    useEffect(() => {
        getAllprojectData();
    }, []);

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
                        {isLoading ? (
                            <Loader /> // Display the loader component
                        ) : (
                            <div className="mainImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                                {ProjectList?.map((project, index) => {
                                    return <ProjectCard key={index} project={project} index={index} />;
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
