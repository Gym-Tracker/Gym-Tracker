import { ExerciseDetails } from "./types";

import json from './exercises.json';

export const exercises: ExerciseDetails[] = json.exercises;

export function getExercise(id: number) {
  return exercises.find(obj => obj.id == id)
}

export function getExerciseName(id: number) {
  return exercises.find(obj => obj.id == id)?.name
}
