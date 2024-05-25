import React, { useState } from 'react'

const context = React.createContext()


const ContextProvider = ({ children }) => {

    const API_KEY = 'AIzaSyCP876fUEYpZa1zZ7QB4VVT1ULLaOTvzHo';
    const [isAsideOpen, setIsAsideOpen] = useState(true);
    const [searchInput,setSearchInput] = useState('');
    const [showMobileSearch,setShowMobileSearch] = useState(false);

    
  const toggleAside =()=>{
    (isAsideOpen)?
    setIsAsideOpen(false):
    setIsAsideOpen(true);
    
  }
    const contextValue = {
        isAsideOpen,
        setIsAsideOpen,
        API_KEY,
        searchInput,
        setSearchInput,
        toggleAside,
        showMobileSearch,
        setShowMobileSearch
    }

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider
export { context }