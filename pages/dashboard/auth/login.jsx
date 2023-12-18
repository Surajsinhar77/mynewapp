import { useSession, signIn, signOut } from "next-auth/react"

export default async function(){
    return(
        <div>
            <button onClick={() => signIn()}>Sign in</button> 
        </div>
    )
}

// clientId: "554ef0348ffe2f772683",
//         clientSecret: "5c2b724c4d4d9773a277967e3eb05a66089aeb68",