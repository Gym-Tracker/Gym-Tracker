import { Exercise } from '../../types'
import styles from './ExerciseCard.module.css'

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <div className={styles.card}>
      <div>{exercise.name}</div>
      <table className={styles.table}>
        <tr>
          <th>Set</th>
          <th>kg</th>
          <th>Reps</th>
          <th>done</th>
        </tr>
        {
          exercise.sets.map((set) =>
            <tr>
              <td>{set.type}</td>
              <td><input pattern="[0-9]*" type="number" defaultValue={set.weight}/></td>
              <td><input pattern="[0-9]*" type="number" defaultValue={set.reps}/></td>
              <td><input type="checkbox"/></td>
            </tr>
          )
        }
      </table>
    </div>
  )
}
