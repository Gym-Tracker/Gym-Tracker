import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './components/HomeScreen/HomeScreen'
import WorkoutScreen from './components/WorkoutScreen/WorkoutScreen'
import MaxWeightSettings from './components/MaxWeightSettings'
import ExerciseList from './components/ExerciseList/ExerciseList'

function App() {
  const [workoutStarted, setWorkoutStarted] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  return (
    <>
      <TopBar setSettingsOpen={setSettingsOpen}/>
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
      { settingsOpen && <MaxWeightSettings setSettingsOpen={setSettingsOpen}/> }
      <ExerciseList/>
    </>
  )
}

export default App
