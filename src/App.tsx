import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './components/HomeScreen/HomeScreen'
import WorkoutScreen from './components/WorkoutScreen/WorkoutScreen'
import MaxWeightSettings from './components/MaxWeightSettings'
import ExerciseList from './components/ExerciseList/ExerciseList'
import { ActiveSet, ActiveWorkout, Routine } from './types'
import { routine } from './Routines'

export function routineToActiveWorkout(routine: Routine) {
  let activeWorkout: ActiveWorkout = {
    exercises: []
  }

  for (const exercise of routine.exercises) {
    let sets: ActiveSet[] = [];

    for (const set of exercise.sets) {
      sets.push({
        ...set,
        done: false
      })
    }

    activeWorkout.exercises.push({
      id: exercise.id,
      sets: sets
    })
  }

  return activeWorkout;
}

function App() {
  const [workoutStarted, setWorkoutStarted] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [exerciseListOpen, setExerciseListOpen] = useState<boolean>(false);
  const [activeWorkout, setActiveWorkout] = useState<ActiveWorkout>(routineToActiveWorkout(routine));

  function selectExercise(id: number) {
    setActiveWorkout({
      exercises: [...activeWorkout.exercises,{
        id: id,
        sets: []
      }]
    })
  }

  return (
    <>
      <TopBar setSettingsOpen={setSettingsOpen}/>
      <BottomBar
        workoutStarted={workoutStarted}
        setWorkoutStarted={setWorkoutStarted}        
      />
      <div className='scrollbox'>
        {workoutStarted
          ? <WorkoutScreen setExerciseListOpen={setExerciseListOpen} activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout}/>
          : <HomeScreen/>
        }
      </div>
      { settingsOpen && <MaxWeightSettings setSettingsOpen={setSettingsOpen}/> }
      { exerciseListOpen && <ExerciseList setExerciseListOpen={setExerciseListOpen} selectExercise={selectExercise}/> }
    </>
  )
}

export default App
