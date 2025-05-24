const Skillbox = (tech) => {
    console.log(tech);
    
    return (
        <>
            <div className="border shadow-lg text-center w-[45%] md:w-[15%] md:h-[160px] bg-gray-900 transfrom px-3 py-4 rounded transform hover:scale-110 transition ease-in-out hover:scale-110 duration-300">
                <img src={tech.tech.logo} alt={tech.tech.name} className="w-20 h-20 mx-auto my-2" />
                <span className="tracking-wider text-lg">{tech.tech.name}</span>
            </div>
        </>
    )
}
export default Skillbox;