import { ActiveExercise, ActiveSet } from '../../types'
import styles from './ExerciseCard.module.css'
import { exercises, getExercise, getExerciseName } from '../../Exercises'

interface props {
  exercise: ActiveExercise
  updateExercise: (exercise: ActiveExercise) => void
  removeExercise: () => void
}

export default function ExerciseCard({ exercise, updateExercise, removeExercise: removeExercise }: props) {

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

  function removeSet(index: number) {
    let newExercise: ActiveExercise = exercise;
    newExercise.sets = exercise.sets.slice(0, index).concat(exercise.sets.slice(index+1));
    updateExercise(newExercise);
  }

  return (
    <div className={styles.card}>
      <div className={styles.headerContainer}>
        <div>{getExerciseName(exercise.id)}</div>
        <div className={styles.closeButton} onClick={removeExercise}>X</div>
      </div>
      <table className={styles.table}>
        <tr>
          <th>Set</th>
          <th>kg</th>
          <th>Reps</th>
          <th>done</th>
          <th></th>
        </tr>
        {
          exercise.sets.map((set, index) =>
            <tr>
              <td>{set.type}</td>
              <td><input 
                  type="number"
                  inputMode="decimal"
                  value={set.weight}
                  onFocus={e => e.target.select()}
                  onChange={(newWeight) => updateSet({...set, weight: parseFloat(newWeight.target.value)}, index)}
                />
              </td>
              <td><input 
                  type="number" 
                  inputMode="numeric"
                  value={set.reps}
                  onFocus={e => e.target.select()}
                  onChange={(newReps) => updateSet({...set, reps: parseInt(newReps.target.value)}, index)}
                />
              </td>
              <td><input 
                  type="checkbox"
                  checked={set.done}
                  onChange={(isDone) => updateSet({...set, done: isDone.target.checked}, index)}
                />
              </td>
              <td><div onClick={() => removeSet(index)}>x</div></td>
            </tr>
          )
        }
      </table>
      <div onClick={addSet}>Add set</div>
    </div>
  )
}
