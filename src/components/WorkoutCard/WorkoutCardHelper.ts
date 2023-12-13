import { Set } from '../../types'

export function highestWeightSet(sets: Set[]) {
  sets.sort((a, b) => (a.weight > b.weight) ? -1 : 1);
  return sets[0];
}
