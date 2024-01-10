import Navbar from "./components/navbar"
import Index from "./components/home"
import Footer from './components/Footer'
export default function Home() {
  return (
    < >
      <div className="w-full sm:w-9/12   sm:m-auto">
        <Navbar/>
        <Index/>
        <Footer/>
      </div>
    </>
  )
}
