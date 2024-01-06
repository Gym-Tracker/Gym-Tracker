import { Workout } from '../../types'
import WorkoutCard from "./WorkoutCard/WorkoutCard"

const workout : Workout = {
  date: new Date(),
  duration: 3600,
  exercises: [
    {
      id: 3,
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
      id: 1,
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


export default function HomeScreen() {
  return (
    <>
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
    </>
  )
}
