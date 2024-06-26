'use client'
import Navbar from '@/pages/components/navbar';
import Footer from '@/pages/components/Footer';
import { FaBookOpen, FaGraduationCap, FaRegNewspaper } from "react-icons/fa6";
import { FaSuitcase, FaGears } from 'react-icons/fa6';
import { GiAchievement } from 'react-icons/gi';
import ProjectCard from '../projects/projectCard';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { GrContact } from 'react-icons/gr';
import { BiMailSend } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import Link from 'next/link';
import axios from 'axios';

export default function About() {
    const [switching, setSwitchingData] = useState(1);
    const subRouterComponents = {
        1: dynamic(() => import('@/pages/components/Education')),
        2: dynamic(() => import('@/pages/components/Exprience')),
        3: dynamic(() => import('@/pages/components/Skill')),
        4: dynamic(() => import('@/pages/components/Achievements')),
        5: dynamic(() => import('@/pages/components/ResumeViewer')),
    }
    const SubRouter = subRouterComponents[switching] || null;

    //const ProjectList = projectList;

    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    const [ProjectList, setProjectList] = useState([]);

    async function getAllprojectData() {
        setIsLoading(true); // Set isLoading to true before making the API call
        fetch('/api/project/getprojects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            }

        }).then((data) => {
            setProjectList(data.data);

        }).catch((err) => {
            console.log("here is the error : ", err);
        })
    }

    useEffect(() => {
        getAllprojectData();
    }, []);


    return (
        <>
            <div className="sm:w-9/12 w-full m-auto px-5">
                <div className="mainAboutContainer">
                    <div className="aboutMeInfo">
                        <h1 className='mb-3 text-4xl text-center uppercase'>About me </h1>
                        <h5 className='text-xl mt-5 font-normal text-center'>Welcome to my portfolio!</h5>
                        <p className='text-lg mt-3 font-normal uppercase text-center'>
                            In Short: Im a passionate and experienced developer with a deep love for all tech things.
                        </p>
                    </div>

                    <div className="AboutInfo sm:flex mt-7 border rounded-xl">
                        <div className="menubar w-50">
                            <div onClick={() => setSwitchingData(1)}
                                className="hover:text-gray-300 cursor-pointer educationOption flex h-6 items-center p-7">
                                <FaGraduationCap className='text-lg mr-4' />
                                <span className='w-fit hover:border-b-2 hover:border-orange-500'>Education</span>
                            </div>
                            <div onClick={() => setSwitchingData(2)}
                                className="hover:text-gray-300 cursor-pointer educationOption flex h-6 items-center p-7 ">
                                <FaSuitcase className='text-l mr-4' />
                                <span className='w-fit hover:border-b-2 hover:border-orange-500'>Expreience</span>
                            </div>
                            <div onClick={() => setSwitchingData(3)}
                                className="hover:text-gray-300 cursor-pointer educationOption flex h-6 items-center p-7 ">
                                <FaGears className='text-l mr-4' />
                                <span className='w-fit hover:border-b-2 hover:border-orange-500'>Skills</span>
                            </div>
                            <div onClick={() => setSwitchingData(4)}
                                className="hover:text-gray-300 cursor-pointer educationOption flex h-6 items-center p-7 ">
                                <GiAchievement className='text-l mr-4' />
                                <span className='w-fit hover:border-b-2 hover:border-orange-500'>Achievements</span>
                            </div>
                            <div onClick={() => setSwitchingData(5)}
                                className="hover:text-gray-300 cursor-pointer educationOption flex h-6 items-center p-7 ">
                                <FaRegNewspaper className='text-l mr-4' />
                                <span className='w-fit hover:border-b-2 hover:border-orange-500'>Resume</span>
                            </div>
                        </div>

                        <div className="OptionContainer w-full p-4">
                            {/* <h1>Eduction</h1> */}
                            <div className="content">
                                {SubRouter && <SubRouter />}
                            </div>
                        </div>
                    </div>

                    <div className="Featureproject mt-40">
                        <h1 className='mb-20 text-4xl text-center'>Feature Project </h1>
                        <div className="mainImage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                            {
                                ProjectList.map((project, index) => {
                                    return <ProjectCard key={index} project={project} index={index} />
                                }
                                )
                            }
                        </div>
                    </div>

                    <div className="ContactOption mt-40">
                        <h1 className='mb-20 text-4xl text-center'>Say Hello <br /> Contact Me </h1>
                        <div className="contactFromAbout">
                            <h3 className='mb-3 text-xl flex items-center font-medium'>< GrContact className='text-blue-600' /> &nbsp; Get in touch</h3>
                            <p className='text-lg font-light'>
                                Sweet, thats it from my side! Now its your turn to say hi. <br />
                                Im available for freelance projects. Lets work together to create something <br /> worth sharing.
                            </p>

                            <div className="btn flex mt-6 mb-28">
                                <Link href="mailto:surajkumar71799@gmail.com" className='flex px-2 py-2 border items-center rounded-lg mr-2 text-red-700 border-red-700 hover:bg-red-700 hover:text-white'>
                                    <BiMailSend className='mr-1' /> Mail </Link>
                                <Link href='https://www.linkedin.com/in/kumar-suraj-sk/' target="_blank" className='flex px-2 py-2 border items-center rounded-lg mr-2 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white'>
                                    <FaLinkedinIn className='mr-1' /> LinkedIn</Link>
                                <Link href='/contact' className='flex px-2 py-2 border items-center rounded-lg mr-2 text-green-500 border-green-500  hover:bg-green-500 hover:text-white'>
                                    <CgWebsite className='mr-1' /> Contact Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}