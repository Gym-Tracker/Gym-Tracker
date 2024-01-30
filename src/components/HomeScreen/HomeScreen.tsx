import { useState } from 'react'
import { Workout } from '../../types'
import WorkoutCard from "./WorkoutCard/WorkoutCard"
import RoutineCard from './RoutineCard/RoutineCard'
import { routine } from '../../Routines'
import styles from './HomeScreen.module.css'

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
  const [workouts, setWorkouts] = useState<Workout[]>([workout, workout, workout])

  async function getWorkouts() {
    const response = await fetch(import.meta.env.VITE_SERVER_URL + "/workout", { credentials: "include" });
    const workoutsResponse: Workout[] = await response.json();

    // Dates of workouts come as strings and need to be Date objects
    for (let i = 0; i < workoutsResponse.length; i++) {
      workoutsResponse[i].date = new Date(workoutsResponse[i].date);
    }

    setWorkouts(workoutsResponse);
  }

  return (
    <>
      <div className='header'>Routines</div>
      <div className={styles.routinesContainer}>
        <RoutineCard routine={routine}/>
        <RoutineCard routine={routine}/>
        <RoutineCard routine={routine}/>
        <RoutineCard routine={routine}/>
      </div>
      <div className='header'>History</div>
      <div onClick={getWorkouts}>refresh</div>
      { workouts.map((workout) => <WorkoutCard workout={workout}/>) }
    </>
  )
}
