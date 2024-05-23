import React from 'react'
import Image from '../../../assets/avatar.avif'
const CommentCard = () => {
  return (
    <div className='flex items-start gap-2 my-4'>
        <img src={Image} alt="" className='w-10 h-10 rounded-full' />
        <div className="">
            <div className="flex items-center gap-2">
                <h3 className='font-semibold'>@Handerler name</h3>
                <p className="text-secondary-gray text-sm">2 weeks</p>
            </div>
            <p>Yoyo ke jamane ke hai hum yoyo sehi man bharta hai</p>
        </div>
    </div>
  )
}

export default CommentCard