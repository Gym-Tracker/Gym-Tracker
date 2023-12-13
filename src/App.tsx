import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './components/HomeScreen/HomeScreen'


function App() {
  const [workuotStarted, setWorkoutStarted] = useState<Boolean>(false);

  return (
    <>
      <TopBar/>
      <BottomBar/>
      <div className='scrollbox'>
        <HomeScreen/>
      </div>
    </>
  )
}

export default App
