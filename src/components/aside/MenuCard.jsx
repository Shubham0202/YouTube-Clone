import React, { useContext } from 'react'
import { context } from '../../context/ContextProvider';
const MenuCard = ({icon,title,isActive=false}) => {
  const {
    setCategoryId,
  } = useContext(context);
 

  return (
    <div className={`cursor-default sm:cursor-pointer hover:bg-gray-200 flex items-center gap-4 px-6 py-2 ${(isActive) ? 'bg-gray-100':''} rounded-lg`}>
        <img className='w-6 h-6' src={icon} alt="" />
        <h3 className={`capitalize ${isActive ? 'font-semibold':''}`}>{title}</h3>
    </div>
  )
}

export default MenuCard