import { ActiveSet, ActiveWorkout, Routine, Workout, Set } from "./types";


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

export function activeWorkoutToWorkout(activeWorkout: ActiveWorkout) {
  let workout: Workout = {
    date: new Date(),
    duration: 3600,
    exercises: []
  }

  for (const exercise of activeWorkout.exercises) {
    let sets: Set[] = [];

    for (const set of exercise.sets) {
      if (set.done == true) {
        sets.push({
          type: set.type,
          weight: set.weight,
          reps: set.reps
        });
      }
    }

    if (sets.length > 0) {
      workout.exercises.push({
        id: exercise.id,
        sets: sets
      })
    }
  }

  return workout;
}
