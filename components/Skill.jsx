import {FaReact,FaJs,FaHtml5,FaCss3,FaBootstrap,FaNodeJs,FaGithub,FaGoogle,FaDharmachakra} from 'react-icons/fa6'
import { SiNextdotjs,SiTailwindcss,SiRedux,SiExpress,SiMongodb,SiMysql,SiFirebase,SiSqlite,SiFastapi,SiVercel,SiFigma} from "react-icons/si";
import {BiLogoFlask} from "react-icons/bi";
import {BsGit} from 'react-icons/bs';
import { SiVisualstudiocode } from "react-icons/si";
// import Image from 'next/image';

export default function Skill() {

    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <>
            <div className="skillContainer">
                <div className="frontEnd">
                    <h1 className='uppercase font-medium text-xl'>Frontend</h1>
                    <div className="webd-frontend flex flex-wrap flex-end">
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <FaReact className='text-4xl text-blue-400'/>
                            <p className='mt-3'>
                                React.js
                            </p>
                        </div>

                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <FaJs className='text-4xl text-yellow-500'/>
                            <p className='mt-3'>
                                JavaScript
                            </p>
                        </div>

                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <SiNextdotjs className='text-4xl text-gray-700'/>
                            <p className='mt-3'>
                                Next.js
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <SiTailwindcss className='text-4xl text-blue-500'/>
                            <p className='mt-3'>
                                TailwindCSS
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <FaHtml5 className='text-4xl text-orange-600'/>
                            <p className='mt-3'>
                                HTML
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <FaCss3 className='text-4xl text-blue-500'/>
                            <p className='mt-3'>
                                CSS3
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <FaBootstrap className='text-4xl text-purple-700'/>
                            <p className='mt-3'>
                                Bootstrap5
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiRedux className='text-4xl text-white'/>
                            <p className='mt-3'>
                                Redux
                            </p>
                        </div>
                    </div>
                </div>

                <div className="backend mt-7">
                    <h1 className='uppercase font-medium text-xl'>Backend</h1>
                    <div className="webd-frontend flex flex-wrap flex-end">
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <FaNodeJs className='text-4xl text-green-500'/>
                            <p className='mt-3'>
                                Node.js
                            </p>
                        </div>

                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiExpress className='text-4xl text-gray-700'/>
                            <p className='mt-3'>
                                Express
                            </p>
                        </div>

                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiMongodb className='text-4xl text-green-600'/>
                            <p className='mt-3'>
                                MongoDb
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <BiLogoFlask className='text-4xl text-gray-600'/>
                            <p className='mt-3'>
                                Flask
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiMysql className='text-4xl text-blue-600'/>
                            <p className='mt-3'>
                                MySQL
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiFirebase className='text-4xl text-yellow-500'/>
                            <p className='mt-3'>
                                Firebase
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiSqlite className='text-4xl text-blue-700'/>
                            <p className='mt-3'>
                                SQLite
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiFastapi className='text-4xl text-green-700'/>
                            <p className='mt-3'>
                                FastAPI
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tools mt-7">
                    <h1 className='uppercase font-medium text-xl'>Tools</h1>
                    <div className="webd-frontend flex flex-wrap flex-end">
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <BsGit className='text-4xl text-orange-600'/>
                            <p className='mt-3'>
                                Git
                            </p>
                        </div>

                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <FaGithub className='text-4xl text-gray-700'/>
                            <p className='mt-3'>
                                Github
                            </p>
                        </div>

                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <FaGoogle className='text-4xl text-blue-400'/>
                            <p className='mt-3'>
                                Googling
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2">
                            <SiVisualstudiocode className='text-4xl text-blue-700'/>
                            <p className='mt-3'>
                                VsCode
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiVercel className='text-4xl text-white'/>
                            <p className='mt-3'>
                                Vercel
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <SiFigma className='text-4xl text-red-500'/>
                            <p className='mt-3'>
                                Figma
                            </p>
                        </div>
                        <div className="border grow w-28 rounded skill p-5 flex flex-col justify-between items-center m-2 ">
                            <FaDharmachakra className='w-10 text-4xl text-green-600'/>
                            <p className='mt-3'>
                                ChatGPT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}