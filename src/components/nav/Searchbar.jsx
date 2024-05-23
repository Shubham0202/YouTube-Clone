import React from 'react'
import SearchLogo from '../../assets/search.svg'
const Searchbar = () => {
    return (
        <div className="sec-2 hidden sm:flex items-center border border-black rounded-full pl-2 w-96">
            <input type="text" placeholder='Search' className='rounded-lg outline-none w-full px-2 py-1' />
            <div className=" sm:cursor-pointer border border-l-black rounded-r-full bg-gray-50 px-4">
                <img src={SearchLogo} className=' dark:invert w-8 h-10' alt="" />
            </div>
        </div>
    )
}

export default Searchbar