import { ExerciseDetails } from "../../types";
import styles from "./ExerciseInfoCard.module.css"

interface props {
  exerciseDetails: ExerciseDetails
  selectExercise: (id: number) => void
}

export default function ExerciseInfoCard({ exerciseDetails, selectExercise }: props) {
  return (
    <div className={styles.container} onClick={() => selectExercise(exerciseDetails.id)}>
      <div><b>{exerciseDetails.name}</b></div>
      <div>{exerciseDetails.primaryMuscles}</div>
    </div>
  )
}
