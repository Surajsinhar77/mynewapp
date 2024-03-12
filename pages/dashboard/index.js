// "use client"
// import { useContext, useState } from 'react';
// import { useSession, signIn, signOut } from "next-auth/react"

// import Image from 'next/image';

export default function Dashboard(){
//     const [userName, setUserName] = useState("default");
//     const {data:session} = useSession();
//     if (session){
//         console.log(session)
//         return (      
//             <>
//                 Signed in as {session.user.email} <br/>     
//                 {/* <Image
//                     src={session.user.image}
//                     width={500}
//                     height={500}
//                     alt="Picture of the author"
//                 /> */}
//                 <button onClick={() => signOut()}>Sign out</button>      
//             </>   
//         )  
//     }  
    return (    
            <>      
                Not signed in <br />      
                {/* <button onClick={() => signIn()}>Sign in</button>     */}
            </>  
        )
};