import { adminData } from '@/Store/auth';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect , useState} from 'react';
import ProjectForm from '@/components/ProjectForm';

export default  function Dashboard() {
    const admindata = useRecoilValue(adminData);
    const router = useRouter();


    // useEffect(() => {
    //     if(admindata === null){
    //         router.push('/login');
    //     } else {      
    //         if(admindata.role !== 'admin'){
    //             router.push('/login');
    //         }
    //     }
    // }
    // , []);

    return (    
        <>  
          <ProjectForm/>
        </>  
    );
}
