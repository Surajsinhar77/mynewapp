import { adminData } from '@/Store/auth';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default  function Dashboard() {
    const admindata = useRecoilValue(adminData);
    const router = useRouter();

    useEffect(()=>{
        if (admindata === null) {
            console.log("This is the admin data here :", admindata);
            router.push('/dashboard/auth');
        }
    },[admindata]);

    return (    
        <>  
            <div className="Container">
                
            </div>    
        </>  
    );
}
