import Link from "next/link";
import {useState, useEffect} from "react";
import { storage } from "@/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";


export default function ProjectCard({project, index}) {

  console.log("this is from the project card page : ", project, index);

  const [imageUrls, setImageUrls] = useState([]);

    // Function to fetch and set the list of image URLs in the 'ProjectImages' folder
        const fetchImages = async (imageFolder) => {
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

    useEffect(() => {
        // Call the function to fetch images when the component mounts
        fetchImages(project.imageFolderName);
    }, []);
  return (
      <>
        <div className="cardBody w-fit border m-auto shadow-md rounded-lg overflow-hidden">
          {/* <div className="upperBody flex border items-center justify-between p-2">
            <div className="main part w-full">
                <div className="nameAndDate  w-full flex flex-col items-center">
                <Link href="/projects/[slug]/" as={`/projects/${index}/`} className="m-auto hover:text-blue-600 hover:underline">
                  <h4 className="textsm">{project?.name}</h4> 
                </Link>
                  <p className="text-xs">{`${project?.date[1]} - ${project?.date[0]} - ${project?.date[2]} To Aug - 31 - 2023 `}</p>
                </div>
            </div>
          </div> */}

          <div className="productImage w-full hover:bg-gray-200 hover:liner flex items-center">
            <Link href="/projects/[slug]/" as={`/projects/${project?.id}/`} className="m-auto">
               <img src={imageUrls[0]} width="400" height="0" className="h-48 object-cover" alt="project image" />
            </Link>
          </div>

          {/* <div className="info text-center mt-3">
            <p className="p-3 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe nihil sunt non odio tempora rem.</p>
            <p className="text-xs">{`${project?.date[1]} - ${project?.date[0]} - ${project?.date[2]} To Aug - 31 - 2023 `}</p>
          </div> */}
          {/* <Link href="/projects/[slug]/" as={`/projects/${index}/`} className="m-auto hover:text-blue-600 hover:underline">
            <h2 className="text-center">{project?.name}</h2>
          </Link> */}
          <div className="useTech p-3 border-t-2">
            <Link href="/projects/[slug]/" as={`/projects/${project?.id}/`} 
              className="m-auto hover:text-blue-600 hover:underline
              ">
              <h2 className="text-center text-lg mb-3">{project?.projectName}</h2>
            </Link>
            
              <button  className="py-1 px-1 text-sm border rounded-md border-red-500 mr-3 mb-3 text-red-500">{project?.projectsTags}</button>
            
          </div>
        </div>
      </>
  )
}