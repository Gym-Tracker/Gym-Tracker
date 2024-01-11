import { useEffect, useState } from "react";
import { ExerciseDetails } from "../../types";
import styles from './ExerciseList.module.css'
import ExerciseInfoCard from "./ExerciseInfoCard";

export default function ExerciseList() {
  const [exerciseList, setExercistList] = useState<ExerciseDetails[]>([]);
  
  async function printJSON() {
    const response = await fetch("src/exercises.json");
    const json = await response.json();
    setExercistList(json);
  }

  useEffect(() => {
    printJSON();
  }, [])


  return(
    <>
      <div className={styles.container}>
        { exerciseList.map((exerciseDetails) => 
            <>
              <ExerciseInfoCard exerciseDetails={exerciseDetails}/>
              <div className={styles.divider}></div>
            </>
          ) 
        }
      </div>
    </>
  )
}