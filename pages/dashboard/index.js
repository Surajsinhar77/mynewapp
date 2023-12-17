"use client"
import { useContext, useState } from 'react';
import Link from 'next/link';

export default function Dashboard(){
    const [userName, setUserName] = useState("default");
    return(
        <>  
            <div>
                Dashboard
                
            </div>
        </>
    )
};