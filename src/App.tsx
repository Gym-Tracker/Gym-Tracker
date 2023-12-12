import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import WorkoutCard from './components/WorkoutCard'
import { Workout } from './types'

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
  return (
    <>
      <TopBar/>
      <BottomBar/>
      <div className='scrollbox'>
        <div className='header'>Next Workout</div>
        <WorkoutCard workout={workout}/>
        <div className='header'>History</div>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
        <WorkoutCard workout={workout}/>
      </div>
    </>
  )
}

export default App
