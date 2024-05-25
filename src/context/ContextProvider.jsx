import React, { useState } from 'react'

const context = React.createContext()


const ContextProvider = ({ children }) => {

    const API_KEY = 'AIzaSyCP876fUEYpZa1zZ7QB4VVT1ULLaOTvzHo';
    const [isAsideOpen, setIsAsideOpen] = useState(true);
    const [categoryId,setCategoryId] = useState(0);
    const [searchInput,setSearchInput] = useState('');

    const contextValue = {
        isAsideOpen,
        setIsAsideOpen,
        categoryId,
        setCategoryId,
        API_KEY,
        searchInput,
        setSearchInput,
    }

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider
export { context }