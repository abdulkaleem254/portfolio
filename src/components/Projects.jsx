import { useState } from "react";
import portfolio from "../assets/portfolio.png";
import recipe from "../assets/food-recipe.png";
import elegant from "../assets/elegant.png";
import tuktuk from "../assets/tuk-tuk.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio",
            image: portfolio,
            description: "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
            gitlink: "https://github.com/abdulkaleem254/portfolio",
            liveUrl: "https://portfolio-gules-eta-68.vercel.app/",
            technologies: ["React.js", "Tailwind CSS"],
            stack: "frontend"
        },
        {
            title: "Food Recipes",
            image: recipe,
            description: "Start typing your favourite dish, this app will show you all the varities with recipe description and youtube video if exists.",
            gitlink: "https://github.com/abdulkaleem254/portfolio",
            liveUrl: "https://food-recipe-making.netlify.app/",
            technologies: ["React.js", "Tailwind CSS", "REST Api"],
            stack: "frontend"
        },
        {
            title: "Elegant Context",
            image: elegant,
            description: "Elegant Clothing For Everyone.",
            gitlink: "https://github.com/abdulkaleem254/shopping",
            liveUrl: "https://shopping-in-elegant.netlify.app/",
            technologies: ["React.js", "Tailwind CSS"],
            stack: "frontend"
        },
        {
            title: "Tuk-Tuk Cambodia",
            image: tuktuk,
            description: "Your ultimate guide to selecting the best tuk-tuk experiences in Cambodia — trusted drivers, local insights, and unforgettable journeys.",
            gitlink: "https://github.com/abdulkaleem254/tuk-tuk",
            liveUrl: "https://cambodia-tuk-tuk.netlify.app/",
            technologies: ["React.js", "Tailwind CSS"],
            stack: "frontend"
        }
    ]
    return (
        <>
            <section className="pt-15 px-5 bg-gray-950 text-white" id='projects'>
                <h2 className="text-3xl text-center font-bold text-gray-200 tracking-wide">My Projects</h2>
                <div className="w-20 border-blue-600 border-b-4 mx-auto mt-2 mb-4"></div>
                <h4 className="text-center mb-10 text-gray-400">Here are some of my recent projects. Each project reflects my skills and experience in different areas of web development.</h4>
                <div className="projects">
                    <div className="selectors flex flex-wrap justify-center gap-2 md:gap-5">
                        <button className="px-5 py-2 border rounded-full bg-gray-800">All</button>
                        <button className="px-5 py-2 border rounded-full bg-gray-800">Frontend</button>
                        <button className="px-5 py-2 border rounded-full bg-gray-800">Backend</button>
                        <button className="px-5 py-2 border rounded-full bg-gray-800">Fullstack</button>
                    </div>
                    <div className="result flex-wrap w-[98%] mx-auto gap-5 md:flex justify-center px-2 my-3 items-center py-5">
                        {projects.map((project, index) => {
                            return (
                                <div className="container relative  md:w-[30%] h-[450px] my-5 md:my-0 border border-gray-600 rounded p-3">
                                    <div className="image-space">
                                        <img src={project.image} className="w-full" alt="" />
                                    </div>
                                    <div className="context my-2 mt-15">
                                        <h2 className="text-xl font-semibold">{project.title}</h2>
                                        <p className="my-1 text-gray-400">{project.description}</p>

                                        <div className="mt-5 mb-2 absolute bottom-0.5">
                                            <div className="flex gap-3 text-sm mb-3 justify-start items-center">
                                                {project.technologies.map(tech =>
                                                    <p className="bg-blue-600 px-2 py-0.5 tracking-wide rounded text-xs">{tech}</p>
                                                )}
                                            </div>
                                            <a href={project.gitlink} className="tracking-wide text-gray-300  me-1 px-2 text-sm py-1"> <GitHubIcon style={{ width: "20px", marginRight: "5px", marginBottom: "3px" }} />Code</a>
                                            <a href={project.liveUrl} className="tracking-wide text-gray-300 mx px-2 text-sm py-1"> <OpenInNewOutlinedIcon style={{ width: "20px", marginRight: "5px", marginBottom: "3px" }} />Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;