import {useState} from "react";
export default function Example() {
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
      
  };
  return (
    
      <div>
         hello world
      </div>
  )
}
