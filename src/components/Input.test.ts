import { calcTM } from "./Input";

test('calculate training max', () => {
  expect(calcTM(100)).toEqual(90);
  expect(calcTM(20)).toEqual(17.5);
  expect(calcTM(21)).toEqual(20);
  expect(calcTM(22)).toEqual(20);
  expect(calcTM(23)).toEqual(20);
  expect(calcTM(24)).toEqual(22.5);
  expect(calcTM(52.5)).toEqual(47.5);
});
