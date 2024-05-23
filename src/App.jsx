import { useContext, useEffect } from 'react'
import './App.css'
import Aside from './components/aside/Aside'
import Main from './components/main/Main'
import Navbar from './components/nav/Navbar'
import Player from './components/play/Player'
import ContextProvider from './context/ContextProvider'
function App() {
  return (
    <ContextProvider>
    <Navbar/>
    {/* home page */}
      <div className='flex items-start'>
        <Aside />
        <Main />
      </div>
      {/* <Player/> */}
    </ContextProvider>
  )
}

export default App
