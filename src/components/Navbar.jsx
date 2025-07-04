import { useState } from "react";
import logo from "../assets/logo.png"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import resume from "../assets/Kaleem_Frontend_Resume.pdf"


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState({
        Home: true,
        About: false,
        Skills: false,
        Projects: false,
        Experience: false,
        Contact: false
    });
    const changeActive = (activekey) => {
        const newActive = {};

        for (let key in active) {
            newActive[key] = key == activekey;
        }
        setActive(newActive);
        setToggle(!toggle);
    }
    return (
        <nav className="bg-gray-950 fixed w-full top-0 left-0 z-1 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute flex-row-reverse w-full inset-y-0 left-0 flex items-center sm:hidden" onClick={() => setToggle(!toggle)}>
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center flex-row-reverse md:flex-row justify-end md:justify-between">
                        <div className="flex shrink-0 items-center">
                            <a href=""><img className="h-30 -ml-5 md:ml-0 w-auto cursor-pointer" src={logo} alt="Your Company" /></a>
                            {/* <h3>Kaleem Portfolio</h3> */}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex h-30 items-center justify-between space-x-4">
                                {Object.keys(active).map(key => {
                                    return <a key={key} href={`#${key.toLowerCase()}`} className={active[key] ? 'block text-center rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white' : 'block text-center rounded-md px-3 py-2 text-base font-medium text-white'} aria-current="page" onClick={() => { changeActive(key) }}>{key}</a>
                                    console.log(key.toUpperCase());



                                })}

                            </div>
                        </div>
                    </div>


                    <div className="hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        <div className="relative ml-3">
                            <div>
                                <button>
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <a type="button" className="relative font-semibold tracking-wide flex rounded px-3 py-2 cursor-pointer bg-blue-800 hover:bg-blue-900 text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                                        href={resume} target="_Blank"
                                    >
                                        Download Resume <FileDownloadOutlinedIcon className="ml-2" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggle ? 'sm:hidden' : 'sm:hidden hidden'} id="mobile-menu">
                <div className=" space-y-1 px-2 pt-2 pb-3">
                    {Object.keys(active).map(key => {
                        return <a key={key} href={`#${key.toLowerCase()}`} className={active[key] ? 'block text-center rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white' : 'block text-center rounded-md px-3 py-2 text-base font-medium text-white'} onClick={() => { changeActive(key) }} aria-current="page">{key}</a>
                        console.log(key.toUpperCase());
                    })}

                    <div className="text-center px-3 py-2">
                        <a href={resume} className="rounded-md px-3 py-2 text-md font-medium cursor-pointer bg-blue-800 hover:bg-blue-900 text-sm">Download Resume <FileDownloadOutlinedIcon className="ml-2" /></a>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;