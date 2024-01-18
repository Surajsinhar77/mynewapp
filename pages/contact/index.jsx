import Navbar from "../components/navbar"
import Footer from "../components/Footer"
import { useState } from "react";

export default function Contact() {
    const [userFormData, setUserFormData] = useState([]);

    function handelFormData(e) {
        e.preventDefault();
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value,
        })
    }

    async function handelFormSubmit(e) {
        e.preventDefault();
        console.log("Does we came here to something");
        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert(error.message);
        }
    };
return (
    <>
        <div className="contactContainer w-9/12 m-auto">
            <Navbar />
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
                                    onChange={handelFormData}
                                />
                            </div>
                            <div className="row1 flex flex-col w-full ml-2  max-lg:ml-0">
                                <label htmlFor="">EMAIL <span className="text-red-500 mb-2">*</span></label>
                                <input 
                                    className="focus:outline-none focus:outline-slate-500 focus:border-none rounded-md h-10 border pl-2" 
                                    type="email"
                                    name="email"
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
                                    onChange={handelFormData}
                                ></textarea>
                            </div>
                        </div>
                        <div className="col flex w-full mt-8">
                            <button 
                                className="px-5 py-2 rounded-3xl text-white bg-blue-500 hover:bg-blue-300 hover:text-gray-600"
                                onClick={handelFormSubmit}
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    </>
)
}