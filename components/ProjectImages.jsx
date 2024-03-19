import { useEffect, useState } from "react";
import axios from 'axios';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";

export default function ProjectImages({ProjectImageFolderName}){
	const [imageUrls, setImageUrls] = useState([]);

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

  useEffect(()=>{
    fetchImages(ProjectImageFolderName);
  },[]);

  console.log("Image urls is saved here : ", imageUrls);

	return (
		<div className="mainImage p-3  w-4/5 h-fit max-lg:w-full">
            <div>
              <img
                src={`${imageUrls[0]}`}
                alt="Project Image"
                className="w-full object-cover h-[420px] max-lg:h-auto"
              />
            </div>

            <div className="otherImageOption border flex w-full mt-7 overflow-x-auto max-lg:grid max-lg:grid-cols-2 gap-2 max-lg:h-fit m-auto place-content-center rounded-xl border-green-300">
              {imageUrls.map((item, index) => (
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
	)
}