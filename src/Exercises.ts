import { ExerciseDetails } from "./types";

export let exercises: ExerciseDetails[] = [];

async function getExercises() {
  const response = await fetch("src/exercises.json");
  const json = await response.json();  
  exercises = json.exercises;
}

getExercises();