import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { BiLogoMediumOld, BiUser } from "react-icons/bi";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    const [dw, setDW] = useState(false);



    const menu = ['Setting', 'Blog', 'About']
    const menu2 = ['profile', 'Service', 'Blog', 'About']

    const [sugg, setSugg] = useState([]);
    const [searchValue, setValue] = useState("");
    const [vis, setVis] = useState(false);


    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const isLoggedIn= true;

    return (
        <>
            <div className='flex flex-col justify-center items-center border my-4 rounded-lg'>
                <div className="navContainer bg-white flex p-2 m-2 w-4/5 items-center max-sm:flex-col rounded justify-between">
                    <div className="logoContainer">
                        <h1 className="text-red-500 text-center font-bold uppercase"> <Link 
                        href='/'>Suraj Kumar</Link> </h1>
                    </div>
                    <div className='flex max-lg:flex-col w-full max-lg:h-auto max-md:h-auto max-md:py-2 max-lg:justify-evenly max-lg:px-5 max-lg:rounded max-lg:gap-3'>

                        <div className="md:hidden flex justify-end">
                            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>


                        <div className="navationtion navItem w-full max-lg:w-full mr-5 md:flex text-blue-700 hidden text-xl">
                            <div className='flex justify-end w-full items-center max-md:flex-col max-lg:items-end' >
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500 active: focus:text-gray-400  focus:ring-violet-300' href='/about'>About </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500 active: focus:text-gray-400  focus:ring-violet-300'   href='/'>Work </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500 active: focus:text-gray-400  focus:ring-violet-300'   href='/projects'>Project </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500 active: focus:text-gray-400  focus:ring-violet-300'   href='/blogs'>Blog </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500 active: focus:text-gray-400  focus:ring-violet-300'   href='/contact'>Contact </Link>
                            </div>
                        </div>

                        <div id="mobile-menu" className={`md:hidden mt-2 ${isMobileMenuOpen ? '' : 'hidden'} text-xl`}>
                            <div className='flex justify-around w-full items-center max-md:flex-col max-lg:items-start' >
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500' href='/about'>About </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500'   href='/'>Work </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500'   href='/projects'>Project </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500'   href='/blogs'>Blog </Link>
                                <Link className='max-lg:px-2 max-lg:text-lg mx-2 hover:border-b-2 hover:border-spacing-2 hover:border-orange-500'   href='/contact'>Contact </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}