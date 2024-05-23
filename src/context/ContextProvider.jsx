import React, { useState } from 'react'

const context = React.createContext()


const ContextProvider = ({ children }) => {

    const [isAsideOpen, setIsAsideOpen] = useState(true);
    const contextValue = {
        isAsideOpen,
        setIsAsideOpen,
    }

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider
export { context }