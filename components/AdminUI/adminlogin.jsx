"use client"

import Image from "next/image";
import axios from 'axios';
import {useEffect, useState} from "react";
import {useRoute} from "@next/router";

async function databaseConnectivity(email, password){
    console.log("This is on the admin login page",email, password);
    const routes = useRoute();
    try{
        const response = await axios.post('http://localhost:3000/api/auth/signin', 
            {
                email: email, 
                password: password
            }
        );
        console.log("This is from adminlogin page :",response);
        routes.push('/dashboard');
    }catch(err){
        console.log("from ther frontend signup ", err);
    }
}

export default function AdminalPage(){
    const [email , setEmail] = useState("");
    const [password, setPassword]= useState("");

    function loginFunc(e){
        e.preventDefault()
        console.log("click function is working ")
        databaseConnectivity(email, password);
        setEmail("");
        setPassword("");
    }

    return(
        <div className="flex h-full">
            <div className="left w-8/12 ">
                <div className="logo">
                    <h1 className="text-4xl p-7 font-bold  uppercase"> Admin Panel</h1>
                    <div className="mainContainer ">
                        <Image className="m-auto" src="/admin/image/loginpageImage.png" width={720} height={480} alt="image of the adminpage" />
                    </div>
                </div>
            </div>
            <div className="right w-4/12 bg-slate-200  flex items-center flex-row px-20 h-screen">
                <div className="formContainer">
                    <div className="headingpart my-5">
                        <h1 className="text-3xl">Manage your Work here  </h1>
                        <p className="text-sm font-light">Please sign-in to your account and start the adventure</p>
                    </div>
                    <div>
                        <form className="h-64 flex flex-col justify-between">
                            <div className="row flex flex-col">
                                <label className="text-xs" htmlFor="">Email</label>
                                <input className="h-10 rounded pl-3 mt-1" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="admin@myportfolio.com" type="email" required/>
                            </div>
                            <div className="row flex flex-col">
                                <label className="text-xs" htmlFor="">Password</label>
                                <input className="h-10 rounded pl-3 mt-1" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required/>
                            </div>
                            <div className="row pl-3">
                                <div className="one">
                                    <input className="mr-1" type="checkbox" />
                                    <label htmlFor="">Remenber me</label>
                                </div>
                                <div className="two">
                                    
                                </div>
                            </div>
                            <div className="row">
                                <button onClick={(e)=>loginFunc(e)} className="bg-black text-white py-2 px-4 border border-white rounded-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}