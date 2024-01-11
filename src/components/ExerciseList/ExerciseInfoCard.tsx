import { ExerciseDetails } from "../../types";
import styles from "./ExerciseInfoCard.module.css"

export default function ExerciseInfoCard({ exerciseDetails }: { exerciseDetails: ExerciseDetails }) {
  return (
    <div className={styles.container}>
      <div><b>{exerciseDetails.name}</b></div>
      <div>{exerciseDetails.primaryMuscles}</div>
    </div>
  )
}
