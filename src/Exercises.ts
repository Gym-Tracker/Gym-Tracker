import { ExerciseDetails } from "./types";

export let exercises: ExerciseDetails[] = [];

async function getExercises() {
  const response = await fetch("src/exercises.json");
  const json = await response.json();  
  exercises = json.exercises;
}

getExercises();

export function getExercise(id: number) {
  return exercises.find(obj => obj.id == id)
}

export function getExerciseName(id: number) {
  return exercises.find(obj => obj.id == id)?.name
}
