import { useState } from "react";
import Skillbox from "./Skillbox";

const Skills = () => {
    // const [skills, setSkills] = useState({
    //     frontend: ['HTML 5,CSS3,Bootstrap,JavaScript,JQuery,React.js,Tailwind,Redux'],
    //     backend:['Node.js,Express.js,REST API,MongoDB, Mongoose']
    // })
    const [skills, setSkills] = useState(
        [
            {
                name: "HTML5",
                logo: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
            },
            {
                name: "CSS3",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            },
            {
                name: "JavaScript",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            },
            {
                name: "React",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            },
            {
                name: "Tailwind CSS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            },
            {
                name: "Material UI",
                logo: "https://mui.com/static/logo.png"
            },
            {
                name: "Vite",
                logo: "https://vitejs.dev/logo.svg"
            },
            {
                name: "Firebase",
                logo: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
            },
            {
                name: "Git",
                logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            },
            {
                name: "Vercel",
                logo: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/favicon.ico"
            },
            {
                name: "Node.js",
                logo: "https://nodejs.org/static/images/logo.svg"
            },
            {
                name: "Express",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            },
            {
                name: "AEM",
                logo: "https://static.cdnlogo.com/logos/a/90/adobe.png"
            }
        ]
    )
    return (
        <>

            <section id="skills" className="">
                <div className="mt-5 py-5">
                    <h2 className="text-3xl text-center "><span className="font-bold text-gray-200 tracking-wide">Skills</span></h2>
                    <div className="w-20 border-blue-600 border-b-3 mx-auto mt-1"></div>

                </div>

            </section>
            <div className="flex  w-[90%] mx-auto flex-wrap gap-5 justify-center items-center my-5">

                {skills.map((tech, index) => {
                    return (
                        <>

                            <Skillbox tech={tech} />



                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Skills;