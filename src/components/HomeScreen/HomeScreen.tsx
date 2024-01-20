import { useState } from 'react'
import { Workout } from '../../types'
import WorkoutCard from "./WorkoutCard/WorkoutCard"

const workout : Workout = {
  date: new Date(),
  duration: 3600,
  exercises: [
    {
      id: "3_4_Sit-Up",
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
      id: "Alternate_Hammer_Curl",
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
      <div className='header'>Next Workout</div>
      <WorkoutCard workout={workout}/>
      <div className='header'>History</div>
      <div onClick={getWorkouts}>refresh</div>
      { workouts.map((workout) => <WorkoutCard workout={workout}/>) }
    </>
  )
}
