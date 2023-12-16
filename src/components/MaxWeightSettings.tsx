import styles from './MaxWeightSettings.module.css'

export default function MaxWeightSettings() {
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
          <td><input type="number" defaultValue={123}/></td>
          <td><input type="number" defaultValue={123}/></td>
          <td><input type="number" defaultValue={123}/></td>
          <td><input type="number" defaultValue={123}/></td>
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