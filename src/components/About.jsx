import profile from "../assets/profil.webp";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const About = () => {
    return (
        <>
            <section id="about" className="py-15 bg-gray-600 dark:bg-gray-800">
                <h2 className="text-3xl text-center "><span className="font-bold text-gray-200 tracking-wide">About Me</span></h2>
                <div className="w-20 border-blue-600 border-b-3 mx-auto mt-1"></div>
                <div className="container w-[90%] my-10 mx-auto block md:flex justify-around text-center">
                    <div className="w-[90%] mx-auto md:w-1/2 mb-5">
                        <div class="relative aspect-square max-w-md" style={{ opacity: 1 }}>
                            <div class="absolute inset-0 border-2 border-blue-600 translate-x-4 translate-y-4 rounded-lg"></div>
                            <div class="relative h-full w-full overflow-hidden rounded-lg">
                                <img alt="Shaik Kaleem" class="object-cover w-full h-full" src={profile} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[95%] mx-auto md:w-1/2 mt-10 md:mt-0">
                        <h2 className="text-3xl font-bold mb-5 tracking-wide">Full Stack Developer</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">I'm a dedicated MERN Stack Developer with a strong grasp of MongoDB, Express.js, React, and Node.js.
                            As a fresher, I've worked on several personal and academic projects that demonstrate my
                            ability to build full-stack web applications with clean architecture and responsive design.
                            I'm enthusiastic about writing efficient code, learning new technologies, and contributing to dynamic development teams.

                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">My journey in web development began during my Computer Science studies, where I developed a strong foundation in full-stack development using the MERN stack. Through personal projects and continuous learning, I've built hands-on experience in developing user-friendly and scalable web applications. I'm
                            passionate about staying updated with the latest technologies and best practices to grow as a modern web developer.</p>
                        <div className="block md:flex justify-between items-center">
                            <div>
                                <p className="font-bold">Name : <span className="font-normal">Shaik Kaleem</span></p>
                                <p className="font-bold">Email : <span className="font-normal">abdulkaleem254@gmail.com</span></p>
                            </div>
                            <div className="border hidden md:block border-gray-100 border-r-2 h-13"></div>
                            <div className="mt-2 text-center">
                                <button type="button" className="relative flex rounded cursor-pointer bg-blue-800 hover:bg-blue-900 text-sm mx-auto" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <a
                                        href="/path/to/your/resume.pdf"
                                        download
                                        className="text-white tracking-wide px-5 py-3 rounded  outline-none  flex items-center"
                                    >
                                        <FileDownloadOutlinedIcon className="ml-2" />Download Resume
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default About;