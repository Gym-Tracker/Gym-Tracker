import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './components/HomeScreen/HomeScreen'
import WorkoutScreen from './components/WorkoutScreen/WorkoutScreen'
import MaxWeightSettings from './components/531-settings/MaxWeightSettings'
import ExerciseList from './components/ExerciseList/ExerciseList'
import { ActiveWorkout } from './types'
import { routine } from './Routines'
import { routineToActiveWorkout } from './ExerciseTypeConversions'
import LoginScreen from './components/LoginScreen/LoginScreen'


function App() {
  const [workoutStarted, setWorkoutStarted] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [exerciseListOpen, setExerciseListOpen] = useState<boolean>(false);
  const [activeWorkout, setActiveWorkout] = useState<ActiveWorkout>(routineToActiveWorkout(routine));
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  function selectExercise(id: number) {
    setActiveWorkout({
      exercises: [...activeWorkout.exercises,{
        id: id,
        sets: []
      }]
    })
  }

  function removeExercise(index: number) {
    setActiveWorkout({
      exercises: activeWorkout.exercises.slice(0, index).concat(activeWorkout.exercises.slice(index+1))
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
          ? <WorkoutScreen 
              setExerciseListOpen={setExerciseListOpen} 
              activeWorkout={activeWorkout} 
              setActiveWorkout={setActiveWorkout}
              removeExercise={removeExercise}
            />
          : <HomeScreen/>
        }
      </div>
      { settingsOpen && <MaxWeightSettings setSettingsOpen={setSettingsOpen}/> }
      { exerciseListOpen && <ExerciseList setExerciseListOpen={setExerciseListOpen} selectExercise={selectExercise}/> }
      { !loggedIn && <LoginScreen setLoggedIn={setLoggedIn}/> }
    </>
  )
}

export default App
