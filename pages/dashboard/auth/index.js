
import { useSession, signIn, signOut } from "next-auth/react"
import Adminlogin from '../../components/AdminUI/adminlogin';

export default function loginPage(){
    const { data: session, status } = useSession();
    return(
        <div>

            {/* <Adminlogin/> */}
            {/* <h2>{session},"here is the status",{status}  </h2> */}
            <h1>Hello world</h1>
            <button onClick={() => signIn()}>Sign in</button> 
        </div>
    )
}

// clientId: "554ef0348ffe2f772683",
//         clientSecret: "5c2b724c4d4d9773a277967e3eb05a66089aeb68",