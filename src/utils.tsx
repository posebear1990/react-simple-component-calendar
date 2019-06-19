export function getDaysOfMounth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();

  const millisecondOfDay = 60 * 1000 * 60 * 24;
  const days =
    (+new Date(year, month + 1) - +new Date(year, month)) / millisecondOfDay;

  return days;
}

export function getFirstDayNumberOfMounth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();

  const days = new Date(year, month).getDay() - 1;

  return days === -1 ? 6 : days;
}

export function getCalendarData(date: Date): Array<Array<number>> {
  const daysOfMounth = getDaysOfMounth(new Date(date));
  const firstDayNumberOfMounth = getFirstDayNumberOfMounth(new Date(date));

  const totalDays = daysOfMounth + firstDayNumberOfMounth;
  const group = totalDays / 7;

  const result = [];

  for (let i = 0; i < group; i++) {
    const weekList = new Array(7).fill(-1).map((item, j) => {
      const dayNumber = i * 7 + j - firstDayNumberOfMounth + 1;

      return dayNumber > 0 && dayNumber <= daysOfMounth ? dayNumber : -1;
    });

    result.push(weekList);
  }

  return result;
}

export function isEqualDay(date1: Date, date2: Date) {
  const isYearEqual = date1.getFullYear() === date2.getFullYear();
  const isMonthEqual = date1.getMonth() === date2.getMonth();
  const isDayEqual = date1.getDate() === date2.getDate();

  return isYearEqual && isMonthEqual && isDayEqual;
}
