export interface Workout {
  date: Date;
  duration: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  sets: Set[];
}

export interface Set {
  type: number;
  weight: number;
  reps: number;
}


export interface Routine {
  exercises: Exercise[];
}


export interface ActiveWorkout {
  exercises: ActiveExercise[];
}

export interface ActiveExercise {
  id: number;
  sets: ActiveSet[];
}

export interface ActiveSet extends Set {
  done: boolean;
}
