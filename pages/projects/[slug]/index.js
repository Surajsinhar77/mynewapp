"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useState } from "react";
// import VideoPlayer from '../../components/VideoPlayer';
import projectList from "./../../projectList.json";
import { Button } from "@mui/base";

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
        <div className="mainContainer-project border h-full flex w-full max-lg:flex-col rounded-xl">
          <div className="mainImage p-3  w-4/5 h-fit max-lg:w-full">
            <div>
              <img
                src={`${mainPageImage}`}
                priority={false}
                alt="Project Image"
                className="w-full object-cover h-[420px] max-lg:h-auto"
              />
            </div>

            <div className="otherImageOption border flex w-full mt-7 overflow-x-auto max-lg:grid max-lg:grid-cols-2 gap-2 max-lg:h-fit m-auto place-content-center rounded-xl border-green-300">
              {ProjectList[params?.slug]?.images.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => functionToChange(e)}
                  name={index}
                  className="imagesOfProject w-28 h-fit border-2 border-orange-600 rounded-xl m-4 hover:shadow-lg cursor-pointer"
                >
                  <img
                    src={item}
                    alt="Project Image"
                    className="w-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>

            <div className="w-full text-center my-3 text-orange-600 underline"><p>Select Image to preview</p></div>

          </div>
          <div className="detailInfo p-5 w-1/5 max-lg:w-full">
            <div> 
              <button className="py-2 px-4 rounded-lg font-bold border-2 bg-red-600 text-white">LIVE</button>
              <button className="py-2 px-4 rounded-lg font-bold border-2 bg-red-600 text-white">GitHub</button> 
            </div>
            <h1 className="mb-5">NAME : {ProjectList[params?.slug]?.name} </h1>
            <div className="tags max-lg:flex max-sm:flex-col">
              <span>TAGS &nbsp;</span>
              {ProjectList[params?.slug]?.tags?.map((tags, index) => {
                return (
                  <button
                    key={index}
                    className="py-1 px-2 text-sm border rounded-md border-red-500 mr-3 mb-3 text-red-500"
                  >
                    {tags}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mainContainer-project border h-full flex items-center p-7 my-10 flex-col rounded-xl">
          <span className="uppercase text-2xl font-medium mb-4">
            Description
          </span>
          <h1>
          The Online Fresh Produce Marketplace is an e-commerce platform designed to connect local farmers and producers with consumers seeking fresh and high-quality fruits and vegetables. This platform aims to revolutionize the way people purchase and access fresh produce, providing a convenient and efficient solution for both producers and consumers.
                <br></br><br></br>
                Key Features:
                <br></br><br></br>
                1. User Registration and Authentication:
                Users can create accounts and log in securely.
                Multi-factor authentication for enhanced security.
                <br></br><br></br>
                2.Product Listings:
                Farmers and producers can create listings for their fruits and vegetables.
                Each listing includes details such as product type, quantity, price, and quality.
                <br></br><br></br>
                3. Search and Filters:
                Users can search for specific fruits or vegetables.
                Filters for sorting by category, price range, and location.
                <br></br><br></br>
                4.Shopping Cart:
                Users can add products to their cart for easy checkout.
                Cart displays a summary of selected items, quantities, and total cost.The Online Fresh Produce Marketplace is an e-commerce platform designed to connect local farmers and producers with consumers seeking fresh and high-quality fruits and vegetables. This platform aims to revolutionize the way people purchase and access fresh produce, providing a convenient and efficient solution for both producers and consumers. Key Features: 1. User Registration and Authentication: Users can create accounts and log in securely. Multi-factor authentication for enhanced security. 2.Product Listings: Farmers and producers can create listings for their fruits and vegetables. Each listing includes details such as product type, quantity, price, and quality. 3. Search and Filters: Users can search for specific fruits or vegetables. Filters for sorting by category, price range, and location. 4.Shopping Cart: Users can add products to their cart for easy checkout. Cart displays a summary of selected items, quantities, and total cost.
                <br></br>
                Skills: MongoDB · Node.js · Express.js · Tailwind CSS · React.js
          </h1>
        </div>

        <div className="mainContainer-project border h-auto flex items-center p-7 my-10 flex-col rounded-xl">
          <div className="flex justify-center items-center h-auto w-full ">
            {/* <VideoPlayer /> */}
            <iframe
              className="w-[720px] h-[360px] max-lg:h-auto border-2 border-green-500 rounded-lg"
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