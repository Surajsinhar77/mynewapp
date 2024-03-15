import { adminData } from '@/Store/auth';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect , useState} from 'react';
import ProjectForm from '@/components/ProjectForm';

export default  function Dashboard() {
    const admindata = useRecoilValue(adminData);
    const router = useRouter();


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
        	<ProjectForm className="my-30"/>
        </>  
    );
}
