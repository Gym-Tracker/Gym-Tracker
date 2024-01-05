import ExerciseCard from "./ExerciseCard"
import { Workout } from "../../types"

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


export default function WorkoutScreen() {

  function submitWorkout() {
      fetch("http://127.0.0.1:8080/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: { "Content-Type": "application/json" }
    })
  }

  return (
    <>
      { workout.exercises.map((exercise) => <ExerciseCard exercise={exercise}/>) }
      <div onClick={submitWorkout}>Submit Workout</div>
    </>
  )
}
