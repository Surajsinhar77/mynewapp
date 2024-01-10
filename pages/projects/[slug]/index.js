"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useState } from "react";
// import VideoPlayer from '../../components/VideoPlayer';
import projectList from "./../../projectList.json";

export default function Project() {
  const params = useParams();
  const ProjectList = projectList;
  const homePagePageImageFolder = `/Images/${ProjectList[params?.slug]?.imgFolderName
    }/homepage0.png`;
  const [mainPageImage, setMainImage] = useState(homePagePageImageFolder);

  function functionToChange(e) {
    e.preventDefault();
    setMainImage(e.target.attributes[0].nodeValue);
  }

  return (
    <>
      <div className="w-[75vw] m-auto">
        <Navbar />
        <h1 className="text-3xl my-8 text-center uppercase">
          {ProjectList[params?.slug]?.title}
        </h1>
        <div className="mainContainer-project border h-full flex w-full max-lg:flex-col">
          <div className="mainImage p-3 border w-4/5 h-fit max-lg:w-full">
            <div>
              <img
                src={`${mainPageImage}`}
                priority={false}
                alt="Project Image"
                className="w-full object-cover h-[420px] max-lg:h-auto"
              />
            </div>

            <div className="otherImageOption border flex w-full mt-7 overflow-x-auto max-lg:grid max-lg:grid-cols-2 gap-2 max-lg:h-fit m-auto place-content-center">
              {ProjectList[params?.slug]?.images.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => functionToChange(e)}
                  name={index}
                  className="imagesOfProject w-28 h-fit border m-4 hover:shadow-lg cursor-pointer"
                >
                  <img
                    src={item}
                    alt="Project Image"
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>


          </div>
          <div className="detailInfo p-5 w-1/5 max-lg:w-full">
            <h1 className="mb-5">NAME : {ProjectList[params?.slug]?.name} </h1>
            <div className="tags max-lg:flex max-sm:flex-col">
              <span>TAGS</span>
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
          <div className="flex justify-center items-center h-auto w-full">
            {/* <VideoPlayer /> */}
            <iframe
              className="w-[720px] h-[360px] max-lg:h-auto"
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


{/* <div className="otherImageOption border flex w-[100%] h-fullmt-7 overflow-x-auto">
              {ProjectList[params?.slug]?.images.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => functionToChange(e)}
                  name={index}
                  className="imagesOfProject w-28 h-full border m-4 hover:shadow-lg cursor-pointer"
                >
                  <img
                    src={item}
                    alt="Project Image"
                    className="w-full object-cover"
                  />
                </div>
              ))} 
            {/* </div> */}