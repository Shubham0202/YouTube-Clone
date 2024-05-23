import React from 'react'
import VideoContainer from './VideoContainer'
import RelatedVideosCard from './RelatedVideosCard'
const Player = () => {
    return (
        <div className="grid place-items-center">
        <div className='mx-4 lg:grid grid-cols-[65%_33%] gap-4 overflow-scroll  hide-scrollbar'>
            <VideoContainer />
            <div className="related">
                <RelatedVideosCard />
            </div>
        </div>
        </div>
    )
}

export default Player