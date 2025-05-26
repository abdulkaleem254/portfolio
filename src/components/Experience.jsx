import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Timeline from './Timeline';
const Experience = () => {
    const timeline = 
        {
            "Work Experience": [{
                title: "Analyst",
                place: "Deloitte USI",
                date: "2023 - Present",
                description: "Working on enterprise-grade web solutions using Adobe Experience Manager (AEM) for content management and delivery. Developed Process enhancement projects with Node.js and integrated APIs across digital platforms."
            },
            {
                title: "Programmer Analyst",
                place: "Cognizant Technology Solutions",
                date: "2021 - 2023",
                description: "Contributed to the design and deployment of scalable, responsive web applications. Collaborated in agile teams to implement robust backend services and intuitive front-end interfaces, ensuring performance and maintainability across projects."
            }],
            "Education": [{
                title: "Electronics & Communication Engineering (B.Tech)",
                place: "Geethanjali Institute of Science & Technology",
                date: "2017 - 2021",
                description: "Gained a strong foundation in electronics, communication systems, and programming. Participated in technical workshops and mini-projects that sparked a transition into software development."
            },
            {
                title: "12th (M.P.C)",
                place: "KCJC",
                date: "2015 - 2017",
                description: "Focused on Mathematics, Physics, and Chemistry. Developed analytical thinking and problem-solving skills that laid the groundwork for a career in engineering and technology."
            },]
        }
        

    return (
        <section className="py-10 pt-15 px-5 bg-gray-900 text-white bg-gray-800" id='experience'>
            <h2 className="text-3xl text-center font-bold text-gray-200 tracking-wide">Experience & Education</h2>
            <div className="w-20 border-blue-600 border-b-4 mx-auto mt-2 mb-10"></div>

            <div className="block md:flex md:h-[400px]">
                <Timeline timeline={timeline['Work Experience']} title="Work Experience" />
                <Timeline timeline={timeline.Education} title="Education"/>

            </div>
            {/* </div> */}
        </section >
    );
};

export default Experience;
