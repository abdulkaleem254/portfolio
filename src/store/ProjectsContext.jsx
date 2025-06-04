import { createContext, useState } from "react";
import portfolio from "../assets/portfolio.png";
import recipe from "../assets/food-recipe.png";
import elegant from "../assets/elegant.png";
import tuktuk from "../assets/tuk-tuk.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const ProjectsContext = createContext();
const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([
        {
            title: "Portfolio",
            image: portfolio,
            description: "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
            gitlink: "https://github.com/abdulkaleem254/portfolio",
            liveUrl: "https://portfolio-gules-eta-68.vercel.app/",
            technologies: ["React.js", "Tailwind CSS", "Material UI"],
            stack: "fullstack"
        },
        {
            title: "Food Recipes",
            image: recipe,
            description: "Start typing your favourite dish, this app will show you all the varities with recipe description and youtube video if exists.",
            gitlink: "https://github.com/abdulkaleem254/portfolio",
            liveUrl: "https://food-recipe-making.netlify.app/",
            technologies: ["React.js", "Tailwind CSS", "REST Api", "Material UI"],
            stack: "backend"
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
    ]);
    return (
        <ProjectsContext.Provider value={{projects}}>
            {children}
        </ProjectsContext.Provider>
    )
}
export {ProjectsContext,ProjectsProvider}