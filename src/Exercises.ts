import { ExerciseDetails } from "./types";

export let exercises: ExerciseDetails[] = [];

async function getExercises() {
  const response = await fetch("src/exercises.json");
  exercises = await response.json();  
}

getExercises();