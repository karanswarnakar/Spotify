import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./app.js"
import PlaybackBar from './components/PlaybackBar/PlaybackBar.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <PlaybackBar/>
    </>
  )
}

export default App
