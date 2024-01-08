import { ActiveWorkout, Routine } from "../../types";
import { routineToActiveWorkout } from "./WorkoutScreen";

const routine : Routine = {
  exercises: [
    {
      id: 2,
      sets: [
        {
          type: 0,
          weight: 30,
          reps: 5
        },
        {
          type: 0,
          weight: 35,
          reps: 5
        },
        {
          type: 0,
          weight: 37.5,
          reps: 8
        },
        {
          type: 0,
          weight: 30,
          reps: 5
        }
      ]
    },
    {
      id: 1,
      sets: [
        {
          type: 0,
          weight: 25,
          reps: 5
        },
        {
          type: 0,
          weight: 27.5,
          reps: 5
        },
        {
          type: 0,
          weight: 32.5,
          reps: 8
        }
      ]
    }
  ]
}

const activeWorkout : ActiveWorkout = {
  exercises: [
    {
      id: 2,
      sets: [
        {
          type: 0,
          weight: 30,
          reps: 5,
          done: false
        },
        {
          type: 0,
          weight: 35,
          reps: 5,
          done: false
        },
        {
          type: 0,
          weight: 37.5,
          reps: 8,
          done: false
        },
        {
          type: 0,
          weight: 30,
          reps: 5,
          done: false
        }
      ]
    },
    {
      id: 1,
      sets: [
        {
          type: 0,
          weight: 25,
          reps: 5,
          done: false
        },
        {
          type: 0,
          weight: 27.5,
          reps: 5,
          done: false
        },
        {
          type: 0,
          weight: 32.5,
          reps: 8,
          done: false
        }
      ]
    }
  ]
}

test('convert routine to active workout', () => {
  expect(routineToActiveWorkout(routine)).toStrictEqual(activeWorkout);
});
