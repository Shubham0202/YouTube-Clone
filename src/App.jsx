import { useContext, useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Player from './components/play/Player'
import ContextProvider from './context/ContextProvider'
import Homepage from './components/Homepage'
import TestAPI from './TestAPI'
import SearchResult from './components/search/SearchResult'
import ErrorLoader from './ErrorLoader'

import ErrorImage from '../src/assets/error/404.jpeg'
function App() {
  return (
    <ContextProvider>
      <Router>
    <Navbar/>
        <Routes>
          <Route path='*' element={<ErrorLoader image={ErrorImage} errorMsg={'The page you are looking for could not be located. It may have been moved or deleted.'} />}/>
          <Route path='/' element={<Homepage/>}/>
          <Route path='player/:vId/:catId' element={<Player/>}/>
          <Route path='search/:q' element={<SearchResult/>}/>
          <Route path='test' element={<TestAPI/>}/>
        </Routes>
      </Router>
   
    </ContextProvider>
  )
}

export default App
