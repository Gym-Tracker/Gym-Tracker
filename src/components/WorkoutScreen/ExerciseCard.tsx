import './ExerciseCard.css'

export default function ExerciseCard() {
  return (
    <div className='card'>
      <div>Squat</div>
      <table className='table'>
        <tr>
          <th>Set</th>
          <th>kg</th>
          <th>Reps</th>
          <th>done</th>
        </tr>
        <tr>
          <td>1</td>
          <td><input type="number"/></td>
          <td><input type="number"/></td>
          <td><input type="checkbox"/></td>
        </tr>
        <tr>
          <td>1</td>
          <td><input type="number"/></td>
          <td><input type="number"/></td>
          <td><input type="checkbox"/></td>
        </tr>
        <tr>
          <td>1</td>
          <td><input type="number"/></td>
          <td><input type="number"/></td>
          <td><input type="checkbox"/></td>
        </tr>
      </table>
    </div>
  )
}
