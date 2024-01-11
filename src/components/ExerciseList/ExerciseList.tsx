import { useEffect, useState, useRef } from "react";
import { ExerciseDetails } from "../../types";
import styles from './ExerciseList.module.css'
import ExerciseInfoCard from "./ExerciseInfoCard";

export default function ExerciseList() {
  const [search, setSearch] = useState<string>("");
  const [filteredExerciseList, setFilteredExercistList] = useState<ExerciseDetails[]>([]);
  const exerciseList = useRef<ExerciseDetails[]>([]);
  
  async function printJSON() {
    const response = await fetch("src/exercises.json");
    exerciseList.current = await response.json();
    setFilteredExercistList(exerciseList.current);
  }
  
  useEffect(() => {
    printJSON();
  }, [])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const filteredItems = exerciseList.current.filter((exercise) => 
      exercise.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredExercistList(filteredItems);
  }

  return(
    <>
      <div className={styles.container}>
        <input className={styles.search} value={search} onChange={(e) => handleInputChange(e)}></input>
        { filteredExerciseList.map((exerciseDetails) => 
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