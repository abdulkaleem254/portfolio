import profile from "../assets/profil.webp";
import "../App.css"
import { useEffect, useState } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Banner = () => {
    function Typewriter({ text, speed = 100 }) {
        const [displayed, setDisplayed] = useState('');

        useEffect(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, speed);
            return () => clearInterval(interval);
        }, [text, speed]);

        return <span>{displayed}</span>;
    }
    return (
        <>

            <>
                <div id="home" className="mt-15 flex flex-col md:flex-row-reverse items-center  relative banner bg-gray-950 text-white">
                    <div className="w-full md:w-[70%] p-4 md:px-10 flex justify-center items-center order-2 md:order-1">
                        <div className="container text-center md:text-start mt-5 md:mt-1 md:mt-0">
                            <div class="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-gray-800/90 backdrop-blur-sm mb-6"><div class="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div><span class="text-xs font-medium gradient-text bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-400">Available for new projects</span></div>
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Hi, I'm <span className="block mt-2 text-blue-600 tracking-wider bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent gradient-text">Shaik Kaleem</span>
                            </h1>
                            <div className="text-3xl px-5 md:px-0 text-center sm:text-3xl md:text-4xl md:px-0 mt-3">
                                <TypeWriterEffect
                                    textStyle={{ fontFamily: 'sans-serif', fontWeight: 500 }}
                                    startDelay={100}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'Front End Developer',
                                        'Web Developer',
                                        'React Enthusiast',
                                    ]}
                                    multiTextDelay={1000}
                                    typeSpeed={100}
                                    multiTextLoop
                                />
                            </div>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto my-5 mb-10">
                                I create outstanding and accessible digital experiences for the web, specializing in building modern full-stack applications with the MERN stack—MongoDB, Express.js, React, and Node.js. My expertise also includes crafting responsive designs using Tailwind CSS and JavaScript.
                            </p>
                            <div className="flex items-center justify-center md:justify-start">
                                <a href="#" className="flex items-center tracking-wider bg-blue-800 hover:bg-blue-900 rounded px-5 py-2 me-8">
                                    View My Work <span className="ml-2">→</span>
                                </a>
                                <a href="#" className="border py-2 px-8 tracking-widest hover:bg-gray-900">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="home_img h-[350px] md:h-[500px] flex items-center justify-center me-0  md:me-30">
                            <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="mask0" mask-type="alpha">
                                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                    </mask>
                                </defs>
                                <g mask="url(#mask0)">
                                    <rect width="100%" height="100%" fill="#F2F4F8" />
                                    <image
                                        href={profile}
                                        x="0"
                                        y="0"
                                        width="200"
                                        height="187"
                                        preserveAspectRatio="xMidYMid slice"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="absolute right-2 md:right-4 top-70 md:top-40 flex flex-col gap-4 items-end">
                        <a className="group bg-gray-800 rounded-full h-[45px]  cursor-pointer text-gray-300 hover:text-gray-100 transition-all duration-300 w-[45px] hover:w-[120px] overflow-hidden flex flex-row-reverse items-center">
                            <GitHubIcon className="mr-2 text-xl" />
                            <span className="mr-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Github
                            </span>
                        </a>

                        <a className="group bg-gray-800 rounded-full h-[45px]  cursor-pointer text-gray-300 hover:text-gray-100 transition-all duration-300 w-[45px] hover:w-[120px] overflow-hidden flex flex-row-reverse items-center">
                            <LinkedInIcon className="mr-2 text-xl" />
                            <span className="mr-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                LinkedIn
                            </span>
                        </a>
                    </div>




                </div >

            </>

        </>
    )
}
export default Banner;