"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaysOfMounth = getDaysOfMounth;
exports.getFirstDayNumberOfMounth = getFirstDayNumberOfMounth;
exports.getCalendarData = getCalendarData;
exports.isEqualDay = isEqualDay;

function getDaysOfMounth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  var millisecondOfDay = 60 * 1000 * 60 * 24;
  var days = (+new Date(year, month + 1) - +new Date(year, month)) / millisecondOfDay;
  return days;
}

function getFirstDayNumberOfMounth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  var days = new Date(year, month).getDay() - 1;
  return days === -1 ? 6 : days;
}

function getCalendarData(date) {
  var daysOfMounth = getDaysOfMounth(new Date(date));
  var firstDayNumberOfMounth = getFirstDayNumberOfMounth(new Date(date));
  var totalDays = daysOfMounth + firstDayNumberOfMounth;
  var group = totalDays / 7;
  var result = [];

  var _loop = function _loop(i) {
    var weekList = new Array(7).fill(-1).map(function (item, j) {
      var dayNumber = i * 7 + j - firstDayNumberOfMounth + 1;
      return dayNumber > 0 && dayNumber <= daysOfMounth ? dayNumber : -1;
    });
    result.push(weekList);
  };

  for (var i = 0; i < group; i++) {
    _loop(i);
  }

  return result;
}

function isEqualDay(date1, date2) {
  var isYearEqual = date1.getFullYear() === date2.getFullYear();
  var isMonthEqual = date1.getMonth() === date2.getMonth();
  var isDayEqual = date1.getDate() === date2.getDate();
  return isYearEqual && isMonthEqual && isDayEqual;
}