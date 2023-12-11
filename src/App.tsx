import './App.css'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import WorkoutCard from './components/WorkoutCard'

function App() {
  return (
    <>
      <TopBar/>
      <BottomBar/>
      <div className='scrollbox'>
        <div className='header'>Next Workout</div>
        <WorkoutCard/>
        <div className='header'>History</div>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>
        <WorkoutCard/>

      </div>
    </>
  )
}

export default App
