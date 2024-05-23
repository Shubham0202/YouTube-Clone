import React from 'react'
import Image from '../../assets/thumbnail/thumb.jpg'
const RelatedVideosCard = () => {
  return (
        <div className="sm:flex items-start gap-2">
            <img src={Image} alt="image" className='rounded-lg sm:w-48 sm:h-28' />
            <div>
                <h3 className='font-semibold line-clamp-2'>DJ ARJUN - SUNDAY GROOVE || Part 08|| Nonstop Punjabi Hits</h3>
                <p className="text-secondary-gray text-sm">DJ Arjun (Official)</p>
                <p className='text-secondary-gray text-sm'>
                    292k views 
                    <span className='inline-block w-1 h-1 mx-1 bg-secondary-gray translate-y-[-2px] rounded-full'></span>
                    2 months ago
                </p>
            </div>
        </div>
  )
}

export default RelatedVideosCard