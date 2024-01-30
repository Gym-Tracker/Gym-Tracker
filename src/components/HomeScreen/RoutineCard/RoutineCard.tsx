import { getExerciseName } from "../../../Exercises";
import { Routine } from "../../../types";
import styles from './RoutineCard.module.css'

export default function RoutineCard({ routine }: { routine: Routine }) {
  return (
    <div className={styles.card}>
      <div><b>{routine.name}</b></div>
      {
        routine.exercises.map(exercise => 
          <div>
            {getExerciseName(exercise.id)}
          </div>
        )
      }
    </div>
  )
}
