import Navbar from "@/components/navbar"
import Index from "@/components/home"
import Footer from '@/components/Footer'

export default function Home() {
  return (
    < >
      <div className="sm:w-9/12 w-full m-auto px-5">
        <Navbar/>
        <Index/>
        <Footer/>
      </div>
    </>
  )
}