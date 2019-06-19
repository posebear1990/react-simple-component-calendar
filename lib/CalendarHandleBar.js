"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CalendarHandleBar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalendarHandleBar(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange;
  var year = date.getFullYear();
  var month = date.getMonth();

  function _onClick(type) {
    onChange(new Date(year, type === "prev" ? month - 1 : month + 1));
  }

  return _react.default.createElement("div", {
    className: "react-simple-component-calendar-handle-bar"
  }, _react.default.createElement("button", {
    className: "react-simple-component-calendar-handle-prev",
    type: "button",
    onClick: function onClick() {
      _onClick("prev");
    }
  }, "<<"), _react.default.createElement("div", {
    className: "react-simple-component-calendar-handle-bar-label"
  }, "".concat(year, " - ").concat("".concat(month + 1).padStart(2, "0"))), _react.default.createElement("button", {
    className: "react-simple-component-calendar-handle-next",
    type: "button",
    onClick: function onClick() {
      _onClick("next");
    }
  }, ">>"));
}