export interface Workout {
  date: Date;
  duration: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
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
  id: string;
  sets: ActiveSet[];
}

export interface ActiveSet extends Set {
  done: boolean;
}


export interface ExerciseDetails {
  name: string,
  force: string,
  level: string,
  mechanic: string,
  equipment: string,
  primaryMuscles: string[],
  secondaryMuscles: string[],
  instructions: string[],
  category: string,
  images: string[],
  id: string
}
