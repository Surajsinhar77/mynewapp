import Navbar from "@/pages/components/navbar"
import Footer from "@/pages/components/Footer"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Contact() {
    const [userFormData, setUserFormData] = useState({});
    const [buttonLoader, setButtonLoader] = useState(false);

    function handelFormData(e) {
        e.preventDefault();
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value,
        })
    }   

    async function handelFormSubmit(e) {
        e.preventDefault();
        setButtonLoader(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData),
            });

            const result = await response.json();
            setUserFormData({
                name :"",
                email : "",
                subject:"",
                message:"",
            })

            const notify = () => toast(result.message , 
                {autoClose: 5000,
                    style: {
                        backgroundColor: result ? 'green' : 'red',
                        color: 'white',
                    },
                },
            );
            notify();
            setButtonLoader(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert(error.message);
            setButtonLoader(false);
        }
    };

return (
    <>
        <div className="contactContainer sm:w-9/12 w-full m-auto px-5">
            <div className="subContainer w-9/12 m-auto max-sm:w-full">
                <div className="contactHeader">
                    <h2 className="text-4xl">Contact Me</h2>
                    <p className="text-lg mt-4">Thank you for visiting my portfolio, I&rsquo;m excited to connect with you Whether you have a question, a potential project, or just want to say hello, feel free to reach out using the contact form below or through the provided contact details </p>
                </div>
                <div className="formContainer mt-4 text-gray-500">
                    <form action="">
                        <div className="col flex justify-between mt-8 max-lg:flex-col">
                            <div className="row1 flex flex-col w-full mr-2">
                                <label htmlFor="">NAME <span className="text-red-500 ">*</span> </label>
                                <input 
                                    className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" 
                                    type="text" 
                                    name="name"
                                    value={userFormData?.name}
                                    onChange={handelFormData}
                                />
                            </div>
                            <div className="row1 flex flex-col w-full ml-2  max-lg:ml-0">
                                <label htmlFor="">EMAIL <span className="text-red-500 mb-2">*</span></label>
                                <input 
                                    className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" 
                                    type="email"
                                    name="email"
                                    value={userFormData?.email}
                                    onChange={handelFormData}
                                />
                            </div>
                        </div>
                        <div className="col flex w-full mt-8">
                            <div className="row1 flex flex-col w-full">
                                <label htmlFor="">SUBJECT <span className="text-red-500 mb-2">*</span> </label>
                                <input 
                                    className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" 
                                    type="text"
                                    name="subject"
                                    value={userFormData?.subject}
                                    onChange={handelFormData}
                                />
                            </div>
                        </div>
                        <div className="col flex w-full mt-8">
                            <div className="row1 flex flex-col w-full h-48">
                                <label htmlFor="">Message <span className="text-red-500 mb-2">*</span> </label>
                                <textarea 
                                    className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md border pl-2" 
                                    rows='100%'
                                    name="message"
                                    value={userFormData?.message}
                                    onChange={handelFormData}
                                ></textarea>
                            </div>
                        </div>
                        <div className="col flex w-full mt-8">
                            <button 
                                className="px-5 py-2 rounded-3xl text-white bg-blue-500 hover:bg-blue-300 hover:text-gray-600"
                                onClick={handelFormSubmit}
                            >
                                {(buttonLoader)? "loading..."
                                :
                                    " Submit"
                                }   
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </>
)
}