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

  const router = useRouter();
  const {slug} = router.query;

  const [ProjectList, setProjectList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [mainPageImage, setMainImage] = useState("");

    // Function to fetch and set the list of image URLs in the 'ProjectImages' folder
        async function fetchImages (imageFolder){

            try {
                // Get a reference to the 'ProjectImages' folder
                const imagesRef = ref(storage, `${imageFolder}`);
                // List all items (files and sub-folders) in the 'ProjectImages' folder
                const listResult = await listAll(imagesRef);
                
                // Create an array to store the URLs of the images
                const urls = [];
                // Iterate through each item in the listResult
                for (const item of listResult.items) {
                    // Get the download URL for each image
                    const url = await getDownloadURL(item);
                    // Push the URL to the urls array
                    urls.push(url);
                }
                
                // Set the image URLs state
                setImageUrls(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        
  async function getAllprojectData(){
    try{
      const response = await axios.post('http://localhost:3000/api/project/getprojectById',{id:slug});
      if(response.status === 200){
        setProjectList(response.data.data);
      }
    }catch(err){
      console.log("here is the error : ", err);
    }
  }

  useEffect(()=>{
    if(slug){
      getAllprojectData();
    }
  },[]);  

  useEffect(()=>{
    fetchImages(ProjectList?.imageFolderName);
    setMainImage(imageUrls[0]);
  },[ProjectList]);


  function functionToChange(e) {
    e.preventDefault();
    // console.log("this is from the project slug index: ", e.target.attributes[0].nodeValue);
    setMainImage(e.target.attributes[0].nodeValue);
  }


  return (
    <>
      <div className="sm:w-9/12 w-full m-auto px-5">
        <Navbar />
        
        <h1 className="text-3xl my-8 text-center uppercase">
          {ProjectList?.projectName}
        </h1>
        <div className="mainContainer-project border h-full flex w-full max-lg:flex-col rounded-xl">
          <div className="mainImage p-3  w-4/5 h-fit max-lg:w-full">
            <div>
              <img
                src={`${imageUrls[0]}`}
                alt="Project Image"
                className="w-full object-cover h-[420px] max-lg:h-auto"
              />
            </div>

            <div className="otherImageOption border flex w-full mt-7 overflow-x-auto max-lg:grid max-lg:grid-cols-2 gap-2 max-lg:h-fit m-auto place-content-center rounded-xl border-green-300">
              {imageUrls?.map((item, index) => (
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
            <div className="sm:my-5 flex lg:flex-col"> 
              <Link href={(ProjectList?.projectLink)? ProjectList?.projectLink : "#"} target={"blank"} className="py-2 px-4 rounded-lg font-bold border-2 bg-red-600 text-white">LIVE</Link>
              <Link href={(ProjectList?.githubLink)? ProjectList?.githubLink:"#"} className="py-2 px-4 rounded-lg font-bold border-2 bg-red-600 text-white">GitHub</Link> 
            </div>
            <h1 className="mb-5">NAME : {ProjectList?.projectName} </h1>
            <div className="tags max-lg:flex max-sm:flex-col">
              <span>TAGS &nbsp;</span>
              
                  <button
                    className="py-1 px-2 text-sm border rounded-md border-red-500 mr-3 mb-3 text-red-500"
                  >
                    {ProjectList?.projectsTags}
                  </button>
               
            </div>
          </div>
        </div>

        <div className="mainContainer-project border h-full flex items-center p-7 my-10 flex-col rounded-xl">
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

        <div className="mainContainer-project border h-auto flex items-center p-7 my-10 flex-col rounded-xl">
          <div className="flex justify-center items-center h-auto w-full ">
            {/* <VideoPlayer /> */}
            <iframe
              className="w-[720px] h-[360px] max-lg:h-auto border-2 border-green-500 rounded-lg"
              src={ProjectList?.youtubeLink}
              frameBorder="0"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

// ProjectList?.[params?.slug]?.ImpLink?.liveLink?.Link? ProjectList?.[params?.slug]?.ImpLink?.liveLink?.LiveLink : '/' 

// ProjectList?.[params?.slug]?.ImpLink?.gitHubLink?.Link? ProjectList?.[params?.slug]?.ImpLink?.gitHubLink?.githubLink : '/'