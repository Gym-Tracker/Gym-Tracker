import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './components/HomeScreen/HomeScreen'
import WorkoutScreen from './components/WorkoutScreen/WorkoutScreen'


function App() {
  const [workoutStarted, setWorkoutStarted] = useState<boolean>(false);

  return (
    <>
      <TopBar/>
      <BottomBar
        workoutStarted={workoutStarted}
        setWorkoutStarted={setWorkoutStarted}        
      />
      <div className='scrollbox'>
        {workoutStarted
          ? <WorkoutScreen/>
          : <HomeScreen/>
        }
      </div>
    </>
  )
}

export default App
