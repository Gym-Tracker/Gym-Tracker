import { Exercise } from '../../types'
import './ExerciseCard.css'

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <div className='card'>
      <div>{exercise.name}</div>
      <table className='table'>
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
              <td><input type="number" defaultValue={set.weight}/></td>
              <td><input type="number" defaultValue={set.reps}/></td>
              <td><input type="checkbox"/></td>
            </tr>
          )
        }
      </table>
    </div>
  )
}
