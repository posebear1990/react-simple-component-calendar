"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Calendar;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _CalendarHandleBar = _interopRequireDefault(require("./CalendarHandleBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Calendar(_ref) {
  var list = _ref.list,
      now = _ref.now,
      onClick = _ref.onClick;
  var timeMap = (0, _react.useMemo)(function () {
    var result = new Map();
    list.forEach(function (item) {
      result.set(new Date(item.time).toDateString(), item);
    });
    return result;
  }, [list]);

  var _useState = (0, _react.useState)(new Date(now)),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var data = (0, _utils.getCalendarData)(date);
  var year = date.getFullYear();
  var month = date.getMonth();

  function onChange(date) {
    setDate(date);
  }

  return _react.default.createElement("div", {
    className: "react-simple-component-calendar-container"
  }, _react.default.createElement(_CalendarHandleBar.default, {
    date: date,
    onChange: onChange
  }), _react.default.createElement("table", {
    className: "react-simple-component-calendar-table"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, ["一", "二", "三", "四", "五", "六", "日"].map(function (item) {
    return _react.default.createElement("th", {
      key: item
    }, _react.default.createElement("span", null, item));
  }))), _react.default.createElement("tbody", null, data.map(function (weekList, i) {
    return _react.default.createElement("tr", {
      key: i
    }, weekList.map(function (day, j) {
      var date = new Date(year, month, day);
      var listItem = timeMap.get(date.toDateString()) || {};

      var _listItem$time = listItem.time,
          time = _listItem$time === void 0 ? undefined : _listItem$time,
          _listItem$className = listItem.className,
          className = _listItem$className === void 0 ? "" : _listItem$className,
          props = _objectWithoutProperties(listItem, ["time", "className"]);

      var todayClass = (0, _utils.isEqualDay)(date, new Date()) ? "today" : "";
      return day !== -1 ? _react.default.createElement("td", {
        key: "".concat(day).concat(j),
        className: "".concat(className, " ").concat(todayClass)
      }, _react.default.createElement("button", _extends({}, props, {
        className: "react-simple-component-calendar-button",
        onClick: function (_onClick) {
          function onClick() {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function () {
          onClick(date, listItem);
        })
      }), day)) : _react.default.createElement("td", {
        key: "".concat(day).concat(j)
      }, _react.default.createElement("button", {
        className: "react-simple-component-calendar-button"
      }));
    }));
  }))));
}