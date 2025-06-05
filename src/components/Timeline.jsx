import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import logo from "../assets/logo.png"
import spot from "../assets/spot-award.jpg"
import applause from "../assets/applause-award.jpg"

const Timeline = ({ timeline, title }) => {
    const [show, setShow] = useState(false);
    const [selectedAwardIndex, setSelectedAwardIndex] = useState(null);
    const [timelineIndex, setTimelineIndex] = useState(null);
    const handleOpen = (ind, timelineInd) => {
        setShow(true);
        setSelectedAwardIndex(ind)
        setTimelineIndex(timelineInd);
        console.log(timeline[timelineInd].awards[ind]);
    }

    const handleClose = () => {
        setShow(false)
    }
    return (
        <>
            <div className="md:w-1/2 relative ml-4">
                <div className="mb-5 flex items-center gap-3">
                    <WorkOutlineOutlinedIcon className='font-bold' />
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-13 bottom-0 w-1 bg-blue-600 rounded-full"></div>

                {timeline.map((item, timelineIndex) => (
                    <div key={timelineIndex} className="mb-10 ml-6 relative">
                        {/* Timeline dot */}
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-1.5 -left-7.5 flex justify-center items-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.place} | {item.date}</p>
                        {item.awards &&
                            <div className='flex gap-3 underline tracking-wide'>
                                {item.awards.map((award, index) => {
                                    return <a className='text-sm text-gray-200 cursor-pointer' onClick={() => handleOpen(index, timelineIndex)}>{award}</a>
                                })}
                            </div>}

                        {show &&
                            timelineIndex !== null &&
                            selectedAwardIndex !== null &&
                            timeline[timelineIndex] &&
                            Array.isArray(timeline[timelineIndex].awards) &&
                            timeline[timelineIndex].awards[selectedAwardIndex] && (
                                <ModalOverlay
                                    title={timeline[timelineIndex].awards[selectedAwardIndex]}
                                    image={selectedAwardIndex==0?spot:applause}
                                    onClose={handleClose}
                                />
                            )}
                        <p className="mt-2 text-gray-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Timeline;