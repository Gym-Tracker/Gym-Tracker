import { ActiveExercise, ActiveSet } from '../../types'
import styles from './ExerciseCard.module.css'
import { exercises } from '../../Exercises'

interface props {
  exercise: ActiveExercise
  updateExercise: (exercise: ActiveExercise) => void
}

export default function ExerciseCard({ exercise, updateExercise }: props) {

  function updateSet(set: ActiveSet, index: number) {
    let newExercise: ActiveExercise = exercise;
    newExercise.sets[index] = set;
    updateExercise(newExercise);
  }

  function addSet() {
    let newExercise: ActiveExercise = exercise;
    newExercise.sets.push({
      type: 0,
      weight: 0,
      reps: 0,
      done: false
    });
    updateExercise(newExercise);
  }

  return (
    <div className={styles.card}>
      <div>{exercises.get(exercise.id)}</div>
      <table className={styles.table}>
        <tr>
          <th>Set</th>
          <th>kg</th>
          <th>Reps</th>
          <th>done</th>
        </tr>
        {
          exercise.sets.map((set, index) =>
            <tr>
              <td>{set.type}</td>
              <td><input 
                  pattern="[0-9]*" 
                  type="number" 
                  value={set.weight} 
                  onChange={(newWeight) => updateSet({...set, weight: parseFloat(newWeight.target.value)}, index)}
                />
              </td>
              <td><input 
                  pattern="[0-9]*" 
                  type="number" 
                  value={set.reps}
                  onChange={(newReps) => updateSet({...set, reps: parseInt(newReps.target.value)}, index)}
                />
              </td>
              <td><input 
                  type="checkbox"
                  onChange={(isDone) => updateSet({...set, done: isDone.target.checked}, index)}
                />
              </td>
            </tr>
          )
        }
      </table>
      <div onClick={addSet}>Add set</div>
    </div>
  )
}
