import ExerciseCard from "./ExerciseCard"
import { ActiveExercise, ActiveWorkout, ActiveSet, Workout, Routine, Set } from "../../types"
import { useState } from "react"

interface props {
  setExerciseListOpen: React.Dispatch<React.SetStateAction<boolean>>
  activeWorkout: ActiveWorkout
  setActiveWorkout: React.Dispatch<React.SetStateAction<ActiveWorkout>>
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


export default function WorkoutScreen({ setExerciseListOpen, activeWorkout, setActiveWorkout }: props) {

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
      <div onClick={() => setExerciseListOpen(true)}>Add Exercise</div>
      <div onClick={submitWorkout}>Submit Workout</div>
    </>
  )
}
