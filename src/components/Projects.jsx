import { useContext, useState } from "react";
import portfolio from "../assets/portfolio.png";
import recipe from "../assets/food-recipe.png";
import elegant from "../assets/elegant.png";
import tuktuk from "../assets/tuk-tuk.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { ProjectsContext } from "../store/ProjectsContext";

const Projects = () => {

    const [selection, setSelection] = useState("All");
    const { projects } = useContext(ProjectsContext);
    const [Projects, setProjects] = useState(projects)


    const techStacks_btns = ["All", "Frontend", "Backend", "Fullstack"];

    const handleSelect = (index) => {
        const selected = techStacks_btns[index]
        setSelection(selected);
        // alert(selected)
        if (selected !== "All") {

            const filteredProjects = projects.filter(project => project.stack === selected.toLowerCase())
            setProjects(filteredProjects);

        }
        else {

            setProjects(projects);
        }

    }


    return (
        <>
            <section className="pt-15 px-5 bg-gray-950 text-white" id='projects'>
                <h2 className="text-3xl text-center font-bold text-gray-200 tracking-wide">My Projects</h2>
                <div className="w-20 border-blue-600 border-b-4 mx-auto mt-2 mb-4"></div>
                <h4 className="text-center mb-10 text-gray-400">Here are some of my recent projects. Each project reflects my skills and experience in different areas of web development.</h4>
                <div className="projects">
                    <div className="selectors flex flex-wrap justify-center gap-2 md:gap-5">
                        {techStacks_btns.map((label, index) => {
                            return <button key={`${label}+${index}`} className={label == selection ? "px-5 py-2 border rounded-full bg-blue-800" : "px-5 py-2 border rounded-full bg-gray-800"} onClick={() => { handleSelect(index) }}>{label}</button>
                        })}
                    </div>
                    <div className="result flex-wrap w-[98%] mx-auto gap-5 md:flex justify-center px-2 my-3 items-center py-5">
                        {Projects && Projects.map((project, index) => {
                            return (
                                <div className="container relative  md:w-[30%] h-[450px] my-5 md:my-0 border border-gray-600 rounded p-3">
                                    <div className="image-space">
                                        <img src={project.image} className="w-full" alt="" />
                                    </div>
                                    <div className="context my-2 mt-15">
                                        <h2 className="text-xl font-semibold">{project.title}</h2>
                                        <p className="my-1 text-gray-400">{project.description}</p>

                                        <div className="mt-5 mb-2 absolute bottom-0.5">
                                            <div className="flex gap-3 flex-wrap text-sm mb-3 justify-start items-center">
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

