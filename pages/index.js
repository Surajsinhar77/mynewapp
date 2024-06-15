import Index from "@/pages/components/home"
import Footer from '@/pages/components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    < >
      <div className="sm:w-9/12 w-full m-auto px-5">
        <Index/>
        <Footer/>
      </div>
      <ToastContainer/>
    </>
  )
}