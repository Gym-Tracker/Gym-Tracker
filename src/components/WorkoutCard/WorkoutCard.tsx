import './WorkoutCard.css'
import { Workout } from '../../types'
import { highestWeightSet } from './WorkoutCardHelper'

function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div className='card'>
      <div>{workout.date.toDateString()}</div>
      <table className='table'>
        <tr>
          <th>Exercise</th>
          <th>Best Set</th>
        </tr>
        {
          workout.exercises.map((exercise) =>
            <tr>
              <td>{`${exercise.sets.length} x ${exercise.name}`}</td>
              <td>{`${highestWeightSet(exercise.sets).weight} kg x ${highestWeightSet(exercise.sets).reps}`}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default WorkoutCard
