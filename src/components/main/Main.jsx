import React from 'react'
import Suggestions from './Suggestions'
import VideoCard from './VideoCard'
const Main = () => {
    return (
        <div className='w-full p-4 pt-0 overflow-x-hidden overflow-y-scroll custom-scrollbar h-[calc(100dvh-70px)]'>
            {/* suggestions */}
            <Suggestions />
            
            {/* videos */}
            <div className="my-4 grid-auto-fit">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            
            </div>
        </div>
    )
}

export default Main