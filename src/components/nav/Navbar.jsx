import React, { useContext } from 'react'
import MenuIcon from '../../assets/menu.svg'
import YouTubeLogo from '../../assets/logo.svg'
import Avatar from '../../assets/avatar.avif'
import Searchbar from './Searchbar'
import { context } from '../../context/ContextProvider'
const Navbar = () => {
  const {
    isAsideOpen,
    setIsAsideOpen,
  } = useContext(context);

  const toggleAside =()=>{
    (isAsideOpen)?
    setIsAsideOpen(false):
    setIsAsideOpen(true);
    
  }
  return (
    <div  className='flex justify-between items-center py-2 sm:px-4 px-2 sticky top-0 bg-white'>
      <div className="sec-1 flex items-center gap-4">
        <div onClick={toggleAside} className="w-8 h-8">
          <img src={MenuIcon} className='w-full h-full' alt="" />
        </div>
        <div className="w-24 h-10">
          <img src={YouTubeLogo} className='w-full h-full' alt="" />
        </div>
      </div>
      {/* searchbar */}
        <Searchbar/>
{/* account */}
      <div className="w-12 h-12">
          <img src={Avatar} className='shadow shadow-gray-300 rounded-full w-full h-full' alt="" />
        </div>
    </div>
  )
}

export default Navbar