import ExerciseCard from "./ExerciseCard"
import { ActiveExercise, ActiveWorkout, ActiveSet, Workout, Routine, Set } from "../../types"
import { useState } from "react"

const routine : Routine = {
  exercises: [
    {
      id: 2,
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

export function routineToActiveWorkout(routine: Routine) {
  let activeWorkout: ActiveWorkout = {
    exercises: []
  }

  for (const exercise of routine.exercises) {
    let sets: ActiveSet[] = [];

    for (const set of exercise.sets) {
      sets.push({
        ...set,
        done: false
      })
    }

    activeWorkout.exercises.push({
      id: exercise.id,
      sets: sets
    })
  }

  return activeWorkout;
}

export function activeWorkoutToWorkout(activeWorkout: ActiveWorkout) {
  let workout: Workout = {
    date: new Date(),
    duration: 3600,
    exercises: []
  }

  for (const exercise of activeWorkout.exercises) {
    let sets: Set[] = [];

    for (const set of exercise.sets) {
      if (set.done == true) {
        sets.push({
          type: set.type,
          weight: set.weight,
          reps: set.reps
        });
      }
    }

    if (sets.length > 0) {
      workout.exercises.push({
        id: exercise.id,
        sets: sets
      })
    }
  }

  return workout;
}


export default function WorkoutScreen() {
  const [activeWorkout, setActiveWorkout] = useState<ActiveWorkout>(routineToActiveWorkout(routine));

  function submitWorkout() {
      fetch("http://127.0.0.1:8080/workout", {
      method: "POST",
      body: JSON.stringify(activeWorkoutToWorkout(activeWorkout)),
      headers: { "Content-Type": "application/json" }
    })
  }

  function updateActiveWorkout(exercise: ActiveExercise, index: number) {
    let newActiveWorkout = {...activeWorkout};
    newActiveWorkout.exercises[index] = exercise;
    setActiveWorkout(newActiveWorkout);
  }
  
  return (
    <>
      { 
        activeWorkout.exercises.map((exercise, index) => 
          <ExerciseCard 
            exercise={exercise} 
            updateExercise={(exercise) => updateActiveWorkout(exercise, index)}
          />
        )
      }
      <div onClick={submitWorkout}>Submit Workout</div>
    </>
  )
}
