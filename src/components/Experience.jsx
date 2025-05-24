const Experience = () => {
    const worktimeline = [
        {
            title: "Analyst",
            place: "Deloitte USI",
            date: "2023 - Present",
            description: "Building full-stack applications using MongoDB, Express.js, React, and Node.js. Focused on clean UI/UX using TailwindCSS and building clones of real-world applications like Flipkart, BookStore, and weather apps."
        },
        {
            title: "Programmer Analyst",
            place: "Cognizant Technology Solutions",
            date: "2021 - 2023",
            description: "Collaborated with a team to build and deploy responsive, scalable applications."
        }
    ];
    const educationTimeline=[
        {
            title:"Electronics & Communication Engineering (B.Tech)",
            place:"Geethanjali Institute of Science & Technology",
            date:"2017 - 2021",
            description:"lorem10"
        },
        {
            title:"12th (M.P.C)",
            place:"KCJC",
            date:"2015 - 2017",
            description:"lorem10"
        },

    ]

    return (
        <section className="py-10 px-5 bg-gray-900 text-white">
            <h2 className="text-3xl text-center font-bold text-gray-200 tracking-wide">Experience & Education</h2>
            <div className="w-20 border-blue-600 border-b-4 mx-auto mt-2 mb-10"></div>

            <div className="block md:flex">
                <div className="md:w-1/2 relative border-l-4 border-blue-600 ml-4">
                    {worktimeline.map((item, index) => (
                        <>
                            <div key={index} className="mb-10 ml-6">
                                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 "></div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.place} | {item.date}</p>
                                <p className="mt-2 text-gray-300">{item.description}</p>
                            </div>

                        </>
                    ))}
                </div>
                <div className="md:w-1/2 relative border-l-4 border-blue-600 ml-4">
                    {educationTimeline.map((item, index) => (
                        <>
                            <div key={index} className="mb-10 ml-6">
                                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.place} | {item.date}</p>
                                <p className="mt-2 text-gray-300">{item.description}</p>
                            </div>

                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
