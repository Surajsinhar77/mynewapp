// "use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router';
import { storage } from "@/firebase/config";

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
        <Navbar />
        
        <h1 className="text-3xl my-8 text-center uppercase">
          {ProjectList?.projectName}
        </h1>
        <div className="mainContainer-project h-full flex w-full max-lg:flex-col rounded-xl">
          <div className="mainImage p-3  w-4/5 h-fit max-lg:w-full">
            <div>
              <img
                src={`${mainPageImage}`}
                alt="Project Image"
                className="w-full object-cover h-[520px] max-lg:h-auto"
              />
            </div>

            <div className="otherImageOption  flex w-full mt-7 overflow-x-auto max-lg:grid max-lg:grid-cols-2 gap-2 max-lg:h-fit m-auto place-content-center rounded border-green-300">
              {imageUrls?.map((item, index) => (
                <div
                  key={index}
                  onClick={(e) => functionToChange(e)}
                  name={index}
                  className="imagesOfProject w-28 h-fit border-0 border-orange-600 rounded m-4 hover:shadow-lg cursor-pointer"
                >
                  <img
                    src={item}
                    alt="Project Image"
                    className="w-full object-cover rounded"
                  />
                </div>
              ))}
            </div>

            <div className="w-full text-center my-3 text-orange-600 underline"><p>Select Image to preview</p></div>

          </div>
          <div className="detailInfo p-5 w-1/5 max-lg:w-full">
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
          </div>
        </div>

        <div className="mainContainer-project  h-full flex items-center p-7 my-10 flex-col rounded-xl">
          <span className="uppercase text-2xl font-medium mb-4">
            Description
          </span>
          <h1>  
              <span className="text-sm flex">
                <h1 className="text-lg pr-3">Overview  </h1>  {ProjectList?.projectOverview}
              </span>

              {
                ProjectList?.feature?.map((item, index)=>
                    <span key={index}>
                        <h1 className="text-lg pr-3"> {item} </h1>
                    </span>
                  )
              }
                
              {/*<br/>
              <span className="text-sm flex">
                <h1 className="text-lg pr-3">Key Features  </h1>  {ProjectList[0]?.theDiscription?.Key_Features
                }
              </span>
              <br/>
              <span className="text-sm flex">
                <h1 className="text-lg pr-3">Product Listings </h1>  {ProjectList[0]?.theDiscription?.Product_Listings
                }
              </span>
              <br/>
              <span className="text-sm flex">
                <h1 className="text-lg pr-3">Search and Filters </h1>  {ProjectList[0]?.theDiscription?.Search_and_Filters
                }
              </span>
              <br/>
              <span className="text-sm flex">
                <h1 className="text-lg pr-3">Shopping Cart </h1>  {ProjectList[0]?.theDiscription?.Shopping_Cart
                }
              </span>
              <br/>
              <span className="text-sm flex">
                <h1 className="text-lg pr-3">Tech Stack </h1>  {ProjectList[0]?.theDiscription?.Skills
                }
              </span>*/}
          </h1>
        </div>

        <div className="mainContainer-project h-auto flex items-center p-7 my-10 flex-col rounded-xl">
          <div className="flex justify-center items-center h-auto w-full ">
            {/* <VideoPlayer /> */}
            <iframe
              className="w-[720px] h-[360px] max-lg:h-auto border-2 border-green-500 rounded-lg"
              src={ProjectList?.youtubeLink}
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
