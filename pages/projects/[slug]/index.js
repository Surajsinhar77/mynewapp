"use client";
import { useParams } from "next/navigation";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useState } from "react";
// import VideoPlayer from '../../components/VideoPlayer';

export default function Project() {
    const params = useParams();
    
    function functionToChange(e) {
        e.preventDefault()
        setMainImage(e.target.attributes[0].nodeValue);
    }

    const ProjectList = [
        {
            name: "e-Commarce VegMarket Store",
            date: [2, "Sep", 2023],
            tags: ["next.js", "react.js", "node.js", "express.js", "mongodb"],
            link: "https://www.youtube.com/embed/5JQocDzdySo",
            img: "/Images/homePage.png",
            imgFolderName : "ecom",
            images: [
                "/Images/ecom/homepage0.png",
                "/Images/ecom/homepage1.png",
                "/Images/ecom/homepage2.png",
                "/Images/ecom/homepage3.png",
            ],
        },

        {
            name: "Hostel Management System",
            date: [10, "Sep", 2022],
            tags: ["Bootstrap", "HTML", "Javascript", "Flask", "Python", "MySql"],
            link: "https://www.youtube.com/embed/dxnCcVa-PQE",
            img: "/Images/hms/HomePageHMS.png",
            imgFolderName : "hms",
            images: [
                "/Images/hms/homepage0.png",
                "/Images/hms/homepage1.png",
                "/Images/hms/homepage2.png",
                "/Images/hms/homepage3.png",
            ],
        },

        {
            name: "StackOver Clone",
            date: [10, "Sep", 2022],
            tags: ["react.js", "node.js", "express.js", "mongodb", "Redux"],
            images: [

            ]
        },
    ];

    const [mainPageImage, setMainImage] = useState(`/Images/${ProjectList[params?.slug]?.imgFolderName}/homepage0.png`);
    console.log(mainPageImage);
    return (
        <>
        <div className="w-9/12 m-auto">
            <Navbar />
            <h1 className="text-3xl my-8 text-center uppercase"> </h1>
            <div className="mainContainer-project border h-full flex">
            <div className="mainImage p-3 border">
                <img
                    src={`${mainPageImage}`}
                    priority={false}
                    alt="Project Image"
                    className="w-full object-cover h-auto"
                />

                <div className="otherImageOption border w-full h-fit flex mt-7">
                    {
                        ProjectList[params?.slug]?.images.map((item, index)=>
                            <div
                                key={index}
                                onClick={(e)=>functionToChange(e)}
                                name={index}
                                className="imagesOfProject w-28 h-fit border m-4 hover:shadow-lg cursor-pointer"
                            >
                                <img
                                    src={item}
                                    width="1920"
                                    alt="Project Image"
                                    className="w-full object-cover"
                                />
                            </div>
                        )
                    }
                            {/* <div className="imagesOfProject w-28 h-24 border m-4
                                hover:shadow-lg cursor-pointer"
                            >
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full'></Image>
                            </div> */}

                            {/* <div className="imagesOfProject w-28 h-24 border m-4
                                hover:shadow-lg cursor-pointer"
                            >
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>

                            <div className="imagesOfProject w-28 h-24 border m-4
                                hover:shadow-lg cursor-pointer"
                            >
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div>

                            <div className="imagesOfProject w-28 h-24 border m-4
                                hover:shadow-lg cursor-pointer"
                            >
                                <Image src="/Images/homePage.png" width="1920" height="420" alt='Project Image' className='w-full '></Image>
                            </div> */}
                </div>
            </div>
            <div className="detailInfo p-5">
                <h1 className="mb-5">NAME : {ProjectList[params?.slug]?.name} </h1>
                <div className="tags">
                <span>TAGS : </span>
                {ProjectList[params?.slug]?.tags?.map((tags, index) => {
                    return (
                    <button
                        key={index}
                        className="py-1 px-1 text-sm border rounded-md border-blue-400 mr-3 mb-3 text-blue-400"
                    >
                        {tags}
                    </button>
                    );
                })}
                </div>
            </div>
            </div>

            <div className="mainContainer-project border h-full flex items-center p-7 my-10 flex-col">
            <span className="uppercase text-2xl font-medium mb-4">
                Description
            </span>
            <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugit
                quam dolor itaque adipisci doloribus ullam? Tenetur veniam enim nisi
                amet consequatur non esse mollitia et maxime in fuga, consectetur
                explicabo dolore quam incidunt odit quae. At consectetur voluptas
                inventore quod maxime, sunt placeat molestiae quis ipsum? Nisi,
                itaque qui.
            </h1>
            </div>

            <div className="mainContainer-project border h-auto flex items-center p-7 my-10 flex-col">
            <div className="flex justify-center items-center h-screen w-full">
                {/* <VideoPlayer /> */}
                <iframe
                className="w-full h-3/4"
                src={ProjectList[params?.slug]?.link}
                frameborder="0"
                allowfullscreen
                ></iframe>
            </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}
