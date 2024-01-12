import styles from './WorkoutCard.module.css'
import { Workout } from '../../../types'
import { highestWeightSet } from './WorkoutCardHelper'
import { exercises } from '../../../Exercises'

function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div className={styles.card}>
      <div>{workout.date.toDateString()}</div>
      <table className={styles.table}>
        <tr>
          <th>Exercise</th>
          <th>Best Set</th>
        </tr>
        {
          workout.exercises.map((exercise) =>
            <tr>
              <td>{`${exercise.sets.length} x ${exercises[exercise.id]}`}</td>
              <td>{`${highestWeightSet(exercise.sets).weight} kg x ${highestWeightSet(exercise.sets).reps}`}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default WorkoutCard
