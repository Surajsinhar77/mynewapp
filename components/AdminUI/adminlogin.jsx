"use client"

import Image from "next/image";
import axios from 'axios';
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import { adminData } from '@/Store/auth';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';


async function databaseConnectivity(email, password){
    try{
        const response = await axios.post('http://localhost:3000/api/auth/signin', 
            {
                email: email, 
                password: password
            }
        );
        if(response.status === 200){
            console.log("This is from adminlogin page :",response);
            return await response.data;
        }
        throw new Error("Error in the response");
    }catch(err){
        console.log("from ther frontend signup ", err);
        const data = {data : err.response.data, status : err.response.status };
        return data;
    }
}

export default function AdminalPage(){
    const [email , setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [admindata, setAdminData] = useRecoilState(adminData);
    const router = useRouter();

    async function loginFunc(e){
        e.preventDefault()
        const data = await databaseConnectivity(email, password);
        setAdminData(data?.data);
        setEmail("");
        setPassword("");

        const notify = () => toast(data.message , 
                {autoClose: 5000,
                    style: {
                        backgroundColor: data? 'green' : 'red',
                        color: 'white',
                    },
                },
        );
        notify();
        router.push('/dashboard')
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
            <div className="right w-4/12  flex items-center flex-row px-20 h-screen">
                <div className="formContainer">
                    <div className="headingpart my-5">
                        <h1 className="text-3xl">Manage your Work here  </h1>
                        <p className="text-sm font-light">Please sign-in to your account and start the adventure</p>
                    </div>
                    <div>
                        <form className="h-64 flex flex-col justify-between">
                            <div className="row flex flex-col">
                                <label className="text-xs" htmlFor="">Email</label>
                                <input className="h-10 text-gray-700 rounded pl-3 mt-1" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="admin@myportfolio.com" type="email" required/>
                            </div>
                            <div className="row flex flex-col">
                                <label className="text-xs" htmlFor="">Password</label>
                                <input className="h-10  text-gray-700 rounded pl-3 mt-1" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required/>
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
