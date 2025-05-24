import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
const Timeline = ({ timeline, title }) => {
    return (
        <>
            <div className="md:w-1/2 relative ml-4">
                <div className="mb-5 flex items-center gap-3">
                    <WorkOutlineOutlinedIcon className='font-bold' />
                    <h2 className="text-2xl">{title}</h2>
                </div>
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-13 bottom-0 w-1 bg-blue-600 rounded-full"></div>

                {timeline.map((item, index) => (
                    <div key={index} className="mb-10 ml-6 relative">
                        {/* Timeline dot */}
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-1.5 -left-7.5 flex justify-center items-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.place} | {item.date}</p>
                        <p className="mt-2 text-gray-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Timeline;