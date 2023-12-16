import styles from './BottomBar.module.css'

interface props {
  workoutStarted: boolean,
  setWorkoutStarted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BottomBar({ workoutStarted, setWorkoutStarted }: props) {

  function toggleWorkout() {
    if (workoutStarted) setWorkoutStarted(false)
    else setWorkoutStarted(true)
  }

  return (
    <div className={styles.bottomBar}>
      <div className={styles.buttonContainer}>
        {workoutStarted
          ? <div className={`${styles.workoutButton} ${styles.stopWorkout}`} onClick={toggleWorkout}>Stop Workout</div>
          : <div className={`${styles.workoutButton} ${styles.startWorkout}`} onClick={toggleWorkout}>Start Workout</div>
        }
      </div>
    </div>
  )
}
