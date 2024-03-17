import { useEffect, useState } from 'react';
import { storage } from "@/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function Test() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        // Function to fetch and set the list of image URLs in the 'ProjectImages' folder
        const fetchImages = async () => {
            try {
                // Get a reference to the 'ProjectImages' folder
                const imagesRef = ref(storage, 'webmarket');
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

        // Call the function to fetch images when the component mounts
        fetchImages();
    }, []);

    return (
        <div>
            <h2>Images in ProjectImages Folder:</h2>
            <div className="image-grid">
                {/* Render each image using its URL */}
                {imageUrls.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default Test;
