import { ExerciseDetails } from "../../types";
import styles from "./ExerciseInfoCard.module.css"

interface props {
  exerciseDetails: ExerciseDetails
  selectExercise: (id: number) => void
  setExerciseListOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExerciseInfoCard({ exerciseDetails, selectExercise, setExerciseListOpen }: props) {
  
  function clickExercise() {
    selectExercise(exerciseDetails.id);
    setExerciseListOpen(false);
  }

  return (
    <div className={styles.container} onClick={clickExercise}>
      <div><b>{exerciseDetails.name}</b></div>
      <div>{exerciseDetails.primaryMuscles}</div>
    </div>
  )
}
