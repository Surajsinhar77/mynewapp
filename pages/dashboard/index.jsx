import { adminData } from '@/Store/auth';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect , useState} from 'react';
import ProjectForm from '@/components/ProjectForm';

export default  function Dashboard() {
    const admindata = useRecoilValue(adminData);
    const router = useRouter();

    // useEffect(()=>{
    //     if (admindata === null) {
    //         console.log("This is the admin data here :", admindata);
    //         router.push('/dashboard/auth');
    //     }
    // },[admindata]);

    const [formData, setFormData] = useState({
	    name: '',
	    date: '',
	    tags: '',
	    link: '',
	    imageName: '',
	    images: '',
	    impLink: '',
	    description: ''
	 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    function handleSubmit(){
    	
    }

    return (    
        <>  

        	<ProjectForm/>

        	// <div className="flex flex-row items-center">
        	// 	<div className="form-container">
        	// 		<form>
        	// 			<div className="form-row">
        	// 			</div>
        	// 		</form> 
        	// 	</div>
        	// </div>
        </>  
    );
}
