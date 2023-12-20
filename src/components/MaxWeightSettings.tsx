import { useState } from 'react';
import styles from './MaxWeightSettings.module.css';
import Input from './Input';
import Form from './Form';

interface props {
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MaxWeightSettings({ setSettingsOpen }: props) {
  const [squat1RP, setSquat1RP] = useState<number>(0);
  const [bench1RP, setBench1RP] = useState<number>(0);
  const [deadlift1RP, setDeadlift1RP] = useState<number>(0);
  const [press1RP, setPress1RP] = useState<number>(0);

  const [squatTM, setSquatTM] = useState<number>(0);
  const [benchTM, setBenchTM] = useState<number>(0);
  const [deadliftTM, setDeadliftTM] = useState<number>(0);
  const [pressTM, setPressTM] = useState<number>(0);

  return (
    <div className={styles.card}>
      <div className={styles.closeContainer}>
        <div onClick={() => setSettingsOpen(false)}>Close</div>
      </div>
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
          <td><Form value={squatTM} setValue={setSquatTM}/></td>
          <td><Form value={benchTM} setValue={setBenchTM}/></td>
          <td><Form value={deadliftTM} setValue={setDeadliftTM}/></td>
          <td><Form value={pressTM} setValue={setPressTM}/></td>
        </tr>
      </table>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>Save</div>
      </div>
    </div>
  )
}