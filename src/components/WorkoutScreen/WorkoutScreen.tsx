import ExerciseCard from "./ExerciseCard"
import { ActiveExercise, ActiveWorkout } from "../../types"
import { activeWorkoutToWorkout } from "../../ExerciseTypeConversions"

interface props {
  setExerciseListOpen: React.Dispatch<React.SetStateAction<boolean>>
  activeWorkout: ActiveWorkout
  setActiveWorkout: React.Dispatch<React.SetStateAction<ActiveWorkout>>
  removeExercise: (index: number) => void 
}

export default function WorkoutScreen({ setExerciseListOpen, activeWorkout, setActiveWorkout, removeExercise: removeExercise }: props) {

  function submitWorkout() {
      fetch(import.meta.env.VITE_SERVER_URL + "/workout", {
      method: "POST",
      credentials: "include",
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
            removeExercise={() => removeExercise(index)}
          />
        )
      }
      <div onClick={() => setExerciseListOpen(true)}>Add Exercise</div>
      <div onClick={submitWorkout}>Submit Workout</div>
    </>
  )
}
