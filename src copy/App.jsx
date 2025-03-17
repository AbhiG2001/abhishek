import React from 'react'
import './App.css'
import LeftSide from './Components/LeftSide'
import MiddleSide from './Components/MiddleSide'
const App = () => {
  return (
    <div className='App'>
      <div className="leftSideHome">
        <LeftSide/>
      </div>
      <div className="middleSide">
        <MiddleSide/>       
      </div>
      <div className="rightSide">right side</div>
    </div>
  )
}

export default App
