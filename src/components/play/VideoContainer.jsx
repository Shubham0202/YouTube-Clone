import React from 'react'
import CommentCard from './comment/CommentCard'
import VideoDescription from './VideoDescription'
import AboutChannel_Video from './AboutChannel_Video'

const VideoContainer = () => {
  return (
    <div className="video-container">
    <video src='blob:https://www.youtube.com/f44406ca-2acb-4535-bd10-aaeca8e3ad84' className='w-full h-96 border-2 rounded-lg'></video>
    {/* <img src={Image} className='w-full h-96' alt="" /> */}
    <h3 className='font-bold text-lg line-clamp-2 capitalize'>One Love - Mega Mashup | Shubh Ft.Sonam Bajwa | Ap Dhillon | Latest Punjabi Song 2024 | Soul Vibes</h3>
    {/* about video & channel*/}
    <AboutChannel_Video/>
    {/* description */}
    <VideoDescription/>
    {/* comment section */}
    <div className="comments mt-4">
        <h3 className="text-lg capitalize font-bold">129 comments</h3>
        <CommentCard/>
    </div>
</div>
  )
}

export default VideoContainer