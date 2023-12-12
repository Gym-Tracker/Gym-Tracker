import './WorkoutCard.css'
import { Workout } from '../types'

const workout : Workout = {
  date: new Date(),
  duration: 3600,
  exercises: [
    {
      name: "Squat",
      sets: [
        {
          type: 0,
          weight: 30,
          reps: 5
        },
        {
          type: 0,
          weight: 35,
          reps: 5
        },
        {
          type: 0,
          weight: 37.5,
          reps: 8
        }
      ]
    },
    {
      name: "Bench Press",
      sets: [
        {
          type: 0,
          weight: 25,
          reps: 5
        },
        {
          type: 0,
          weight: 27.5,
          reps: 5
        },
        {
          type: 0,
          weight: 32.5,
          reps: 8
        }
      ]
    }
  ]
}

function WorkoutCard() {
  return (
    <div className='card'>
      <div>2 days ago</div>
      <table className='table'>
        <tr>
          <th>Exercise</th>
          <th>Best Set</th>
        </tr>
        <tr>
          <td>4 x Squat</td>
          <td>57.5 kg x 9</td>
        </tr>
        <tr>
          <td>4 x Bench Press</td>
          <td>30.25 kg x 9</td>
        </tr>
      </table>
    </div>
  )
}

export default WorkoutCard
