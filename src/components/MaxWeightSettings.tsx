import { useState } from 'react'
import styles from './MaxWeightSettings.module.css'
import Input from './Input';


export default function MaxWeightSettings() {
  const [squat1RP, setSquat1RP] = useState<number>(0);
  const [bench1RP, setBench1RP] = useState<number>(0);
  const [deadlift1RP, setDeadlift1RP] = useState<number>(0);
  const [press1RP, setPress1RP] = useState<number>(0);

  const [squatTM, setSquatTM] = useState<number>(0);
  const [benchTM, setBenchTM] = useState<number>(0);
  const [deadliftTM, setDeadliftTM] = useState<number>(0);
  const [pressTM, setPressTM] = useState<number>(0);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tr>
          <th></th>
          <th>Squat</th>
          <th>Bench</th>
          <th>Deadlift</th>
          <th>Press</th>
        </tr>
        <tr>
          <td>1RM</td>
          <td><Input weight={squat1RP} setWeight={setSquat1RP} setTM={setSquatTM}/></td>
          <td><Input weight={bench1RP} setWeight={setBench1RP} setTM={setBenchTM}/></td>
          <td><Input weight={deadlift1RP} setWeight={setDeadlift1RP} setTM={setDeadliftTM}/></td>
          <td><Input weight={press1RP} setWeight={setPress1RP} setTM={setPressTM}/></td>
        </tr>
        <tr>
          <td>TM</td>
          <td><input type="number" defaultValue={123}/></td>
          <td><input type="number" defaultValue={123}/></td>
          <td><input type="number" defaultValue={123}/></td>
          <td><input type="number" defaultValue={123}/></td>
        </tr>
      </table>
    </div>
  )
}