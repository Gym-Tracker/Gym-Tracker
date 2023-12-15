import './BottomBar.css'

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
    <div className='bottomBar'>
      <div className='buttonContainer'>
        {workoutStarted
          ? <div className='workoutButton stopWorkout' onClick={toggleWorkout}>Stop Workout</div>
          : <div className='workoutButton startWorkout' onClick={toggleWorkout}>Start Workout</div>
        }
      </div>
    </div>
  )
}
