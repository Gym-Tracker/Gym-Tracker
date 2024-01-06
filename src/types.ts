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
