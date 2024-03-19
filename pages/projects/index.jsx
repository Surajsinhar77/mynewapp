// "use server";

import Navbar from '@/components/navbar';
// import Image from 'next/image';
import ProjectCard from './projectCard'
import Footer from '@/components/Footer';
import projectList from "@/pages/projectList.json";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
    const [ProjectList, setProjectList] = useState([]);
        
    async function getAllprojectData(){
        axios.get('http://localhost:3000/api/project/getprojects')
        .then((response) => {
            setProjectList(response.data.data);
        })
        .catch((error) => {
            console.log("this is the error ", error);
        })
    }
    useEffect(()=>{
        getAllprojectData()
    },[]);   

    return (
        <>
            <div className="sm:w-9/12 w-full m-auto px-5">
                <Navbar/>
                <div className="projectContaienr">
                    <div className="mainHeading mb-14">
                        <h1 className="mainHead text-3xl underline my-12">Projects</h1>
                        <h4 className="subheading text-xl mt-5">
                            Some of my spare time tinkering
                        </h4>
                    </div>

                    <div className="pageImgAndAbout ">
                        <div className="mainImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                            {
                                ProjectList?.map((project,index)=>{
                                        return <ProjectCard key={index} project={project} index={index}/>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
