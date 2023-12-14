import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './components/HomeScreen/HomeScreen'
import WorkoutScreen from './components/WorkoutScreen/WorkoutScreen'

const workout : Workout = {
  date: new Date(),
  duration: 3600,
  exercises: [
    {
      name: "Squat",
      sets: [
        {
          type: 0,
          weight: 30,
          reps: 5
        },
        {
          type: 0,
          weight: 35,
          reps: 5
        },
        {
          type: 0,
          weight: 37.5,
          reps: 8
        },
        {
          type: 0,
          weight: 30,
          reps: 5
        }
      ]
    },
    {
      name: "Bench Press",
      sets: [
        {
          type: 0,
          weight: 25,
          reps: 5
        },
        {
          type: 0,
          weight: 27.5,
          reps: 5
        },
        {
          type: 0,
          weight: 32.5,
          reps: 8
        }
      ]
    }
  ]
}


function App() {
  const [workoutStarted, setWorkoutStarted] = useState<Boolean>(false);

  return (
    <>
      <TopBar/>
      <BottomBar/>
      <div className='scrollbox'>
        <WorkoutScreen/>
        {/* <HomeScreen/> */}
      </div>
    </>
  )
}

export default App
