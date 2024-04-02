import { adminData } from '@/Store/auth';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect , useState} from 'react';
import ProjectForm from '@/components/ProjectForm';
import {app} from '@/firebase/config';


export default  function Dashboard() {
    const admindata = useRecoilValue(adminData);
    const router = useRouter();


    // function uploadImage(file) {
    //   var imageName = file.name;
    //   var imageRef = storageRef.child('ProjectImages/' + imageName);
    //   return imageRef.put(file); // Returns a Promise
    // }

    // useEffect(() => {
    //     console.log("This is the admin data ", admindata);
    //     if(admindata === null){
    //         router.push('/dashboard/auth');
    //     } else {      
    //         if(admindata.userExist ){
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
