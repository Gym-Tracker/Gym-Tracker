import { getExerciseName } from "../../../Exercises";
import { Exercise, Routine } from "../../../types";
import styles from './RoutineCard.module.css'

function exerciseNamesString(exercises: Exercise[]) {
  return exercises.map(exercise => getExerciseName(exercise.id)).join(", ");
}

export default function RoutineCard({ routine }: { routine: Routine }) {
  return (
    <div className={styles.card}>
      <div><b>{routine.name}</b></div>
      <div>{exerciseNamesString(routine.exercises)}</div>
      <div className={styles.button}>Start Routine</div>
    </div>
  )
}
