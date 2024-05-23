import React from 'react'
import Thumbnail from '../../assets/thumbnail/thumb.jpg'
const VideoCard = () => {
    return (
        <div className=''>
            <img src={Thumbnail} alt="" className='w-full h-56 rounded-lg object-cover' />

            <div className="video-info mt-2 flex items-start gap-2">
                <img src={Thumbnail} alt="" className='w-10 h-10 rounded-full object-cover' />
                <div>
                    <h3 className='line-clamp-2 font-semibold'>Experience the Power of Badass Boys Themes - Jukebox | Epic Tamil Workout and</h3>
                    <p className="line-clamp-1 text-secondary-gray">Music On</p>
                    <p className="text-secondary-gray line-clamp-1">
                        844 views
                        <span className='inline-block p-[2px] rounded-full bg-primary-gray mx-1 translate-y-[-2px]'></span>
                        2 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard