export function getDaysOfMounth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var millisecondOfDay = 60 * 1000 * 60 * 24;
    var days = (+new Date(year, month + 1) - +new Date(year, month)) / millisecondOfDay;
    return days;
}
export function getFirstDayNumberOfMounth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var days = new Date(year, month).getDay() - 1;
    return days === -1 ? 6 : days;
}
export function getCalendarData(date) {
    var daysOfMounth = getDaysOfMounth(new Date(date));
    var firstDayNumberOfMounth = getFirstDayNumberOfMounth(new Date(date));
    var totalDays = daysOfMounth + firstDayNumberOfMounth;
    var group = totalDays / 7;
    var result = [];
    var _loop_1 = function (i) {
        var weekList = new Array(7).fill(-1).map(function (item, j) {
            var dayNumber = i * 7 + j - firstDayNumberOfMounth + 1;
            return dayNumber > 0 && dayNumber <= daysOfMounth ? dayNumber : -1;
        });
        result.push(weekList);
    };
    for (var i = 0; i < group; i++) {
        _loop_1(i);
    }
    return result;
}
export function isEqualDay(date1, date2) {
    var isYearEqual = date1.getFullYear() === date2.getFullYear();
    var isMonthEqual = date1.getMonth() === date2.getMonth();
    var isDayEqual = date1.getDate() === date2.getDate();
    return isYearEqual && isMonthEqual && isDayEqual;
}
//# sourceMappingURL=utils.js.map