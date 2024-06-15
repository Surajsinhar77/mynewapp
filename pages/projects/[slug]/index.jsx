// "use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/pages/components/navbar";
import Footer from "@/pages/components/Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router';
import { storage } from "@/firebase/config";
import { Divider } from "@mui/material";
import { Button } from "@headlessui/react";

// export async function getData() {
//   'use server';
//   // Logic to retrieve data (GET)

// }

export default function Project() {
  const params = useParams();
  const slug = params?.slug;
  const [loading, setLoading] = useState(true);
  const [ProjectList, setProjectList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [mainPageImage, setMainImage] = useState("");

  async function getAllprojectData() {
    try {
      const response = await axios.post('/api/project/getprojectById', { id: slug });
      if (response.status === 200) {
        setProjectList(response.data.data);
      }
    } catch (err) {
      console.log("here is the error : ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (slug) {
      getAllprojectData();
    }
  }, [slug]);

  useEffect(() => {
    if (ProjectList?.imageFolderName) {
      fetchImages(ProjectList.imageFolderName);
    }
  }, [ProjectList]);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setMainImage(imageUrls[0]);
    }
  }, [imageUrls]);

  async function fetchImages(imageFolder) {
    try {
      const imagesRef = ref(storage, `${imageFolder}`);
      const listResult = await listAll(imagesRef);
      const urls = await Promise.all(listResult.items.map(async (item) => {
        return await getDownloadURL(item);
      }));
      setImageUrls(urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  function functionToChange(e) {
    e.preventDefault();
    setMainImage(e.target.attributes[0].nodeValue);
  }

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <div className="sm:w-9/12 w-full m-auto px-5">
        <h1 className="text-3xl my-8 text-center uppercase">
          {ProjectList?.projectName}
        </h1>
        <div className="mainContainer-project h-full flex w-full max-lg:flex-col rounded-xl ">
          <div className="mainImage p-3  w-full h-fit max-lg:w-full">
            <div>
              <img
                src={`${mainPageImage}`}
                alt="Project Image"
                className="w-full object-cover h-[720px] max-lg:h-auto rounded-lg"
              />
            </div>

            <div className="otherImageOption  flex w-full mt-7 overflow-x-auto max-lg:grid max-lg:grid-cols-2 gap-2 max-lg:h-fit m-auto place-content-center rounded border-green-300">
              {imageUrls?.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => functionToChange(e)}
                  name={index}
                  className="imagesOfProject w-28 h-fit border border-white rounded m-4 hover:shadow-lg cursor-pointer p-1"
                >
                  <img
                    src={item}
                    alt="Project Image"
                    className="w-full object-cover rounded"
                  />
                </div>
              ))}
            </div>

            <div className="w-full text-center my-3 text-green-600 ">
              <p>Select Image to preview</p>
            </div>

          </div>


          {/* <div className="detailInfo p-5 w-1/5 max-lg:w-full">
            <div className="sm:my-5 flex lg:flex-col"> 
              <Link href={(ProjectList?.projectLink)? ProjectList?.projectLink : "#"} target={"blank"} className="py-2 px-4 rounded-lg font-bold border-2 bg-red-600 text-white">LIVE</Link>
              <Link href={(ProjectList?.githubLink)? ProjectList?.githubLink:"#"} className="py-2 px-4 rounded-lg font-bold border-2 bg-red-600 text-white">GitHub</Link> 
            </div>
            <h1 className="mb-5">NAME : {ProjectList?.projectName} </h1>
            <div className="tags max-lg:flex max-sm:flex-col">
                  <span
                    className="py-1 px-2 text-sm border rounded-md border-red-500 mr-3 mb-3 text-red-500"
                  >
                    {ProjectList?.projectsTags}
                  </span>
            </div>

                        <div className="tags max-lg:flex max-sm:flex-col mt-9 text-center">
                          <span className="text-lg"> TECH STACK </span>
                          <br/>
                          {
                            ProjectList?.techStack?.map((item, index)=>
                              <button
                                key={index}
                                className="py-1 px-2 text-sm border rounded-md border-green-500 mr-3 mb-3 text-green-500"
                              >
                                {item}
                              </button>
                            )
                          }
                        </div>
          </div> */}
        </div>

        <div className="my-10">
          <div className="flex gap-3 items-center justify-center">
            <span>
              <Button className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-gray-600 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-400 hover:text-white data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Live Project Link
              </Button>
            </span>
            <span>
              <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Github Link
              </Button>
            </span>
          </div>
        </div>
        <div className="mainContainer-project  flex p-5">
          <span className="w-2/5 flex items-center justify-center">
            <h1 className="text-6xl text-center text-green-400 uppercase font-sans">About Project</h1>
          </span>
          <span className="w-3/5 p-5">
            <p className="mt-5 text-lg text-justify">  
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, porro corrupti corporis quisquam veritatis voluptas, dolores, tenetur enim eius dolor aliquid laudantium sit odit praesentium quae numquam maiores hic. Odio dolorum cum architecto ipsum rerum tempore veritatis debitis illo numquam. Corporis dignissimos nihil porro cumque quam ad deserunt, deleniti voluptates accusamus recusandae! Magni id asperiores ad vel, suscipit assumenda rem eius nisi reprehenderit accusantium perspiciatis doloribus itaque aliquid tempore architecto dignissimos voluptatem. Ratione illum mollitia expedita, reiciendis id repellendus nihil in harum a provident iste incidunt rerum obcaecati aliquid at adipisci suscipit, beatae, voluptatum aliquam corrupti minima tenetur aspernatur. Dolores.
            </p>
          </span>
        </div>

        <div className="mainContainer-project h-auto flex items-center p-7 my-10 flex-col rounded-xl">

        </div>
      </div>
    </>
  );
}
