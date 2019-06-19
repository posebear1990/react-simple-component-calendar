import {
  getDaysOfMounth,
  getFirstDayNumberOfMounth,
  getCalendarData,
  isEqualDay
} from "../src/utils";

test("test getDaysOfMounth", () => {
  const date1 = new Date(2019, 5);
  const date2 = new Date(2019, 9);

  expect(getDaysOfMounth(date1)).toBe(30);
  expect(getDaysOfMounth(date2)).toBe(31);
});

test("test getFirstDayNumberOfMounth", () => {
  const date1 = new Date(2019, 5);
  const date2 = new Date(2019, 9);

  expect(getFirstDayNumberOfMounth(date1)).toBe(5);
  expect(getFirstDayNumberOfMounth(date2)).toBe(1);
});

test("test getCalendarData", () => {
  const date = new Date(2019, 5);

  expect(getCalendarData(date)).toStrictEqual([
    [-1, -1, -1, -1, -1, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30]
  ]);
});

test("test isEqualDay", () => {
  const date1 = new Date(2019, 5, 1);
  const date2 = new Date(2019, 9, 10);

  expect(isEqualDay(date1, new Date(1559318400000))).toBe(true);
  expect(isEqualDay(date2, new Date(1570636800922))).toBe(true);
});
