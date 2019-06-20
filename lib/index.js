var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { useState, useMemo } from "react";
import { isEqualDay, getCalendarData } from "./utils";
import CalendarHandleBar from "./CalendarHandleBar";
export default function Calendar(_a) {
    var list = _a.list, now = _a.now, onClick = _a.onClick;
    var timeMap = useMemo(function () {
        var result = new Map();
        list.forEach(function (item) {
            result.set(new Date(item.time).toDateString(), item);
        });
        return result;
    }, [list]);
    var _b = useState(new Date(now)), date = _b[0], setDate = _b[1];
    var data = getCalendarData(date);
    var year = date.getFullYear();
    var month = date.getMonth();
    function onChange(date) {
        setDate(date);
    }
    return (React.createElement("div", { className: "react-simple-component-calendar-container" },
        React.createElement(CalendarHandleBar, { date: date, onChange: onChange }),
        React.createElement("table", { className: "react-simple-component-calendar-table" },
            React.createElement("thead", null,
                React.createElement("tr", null, ["一", "二", "三", "四", "五", "六", "日"].map(function (item) { return (React.createElement("th", { key: item },
                    React.createElement("span", null, item))); }))),
            React.createElement("tbody", null, data.map(function (weekList, i) { return (React.createElement("tr", { key: i }, weekList.map(function (day, j) {
                var date = new Date(year, month, day);
                var listItem = timeMap.get(date.toDateString()) || {};
                var _a = listItem.time, time = _a === void 0 ? undefined : _a, _b = listItem.className, className = _b === void 0 ? "" : _b, props = __rest(listItem, ["time", "className"]);
                var todayClass = isEqualDay(date, new Date()) ? "today" : "";
                return day !== -1 ? (React.createElement("td", { key: "" + day + j, className: className + " " + todayClass },
                    React.createElement("button", __assign({}, props, { className: "react-simple-component-calendar-button", onClick: function () {
                            onClick(date, listItem);
                        } }), day))) : (React.createElement("td", { key: "" + day + j },
                    React.createElement("button", { className: "react-simple-component-calendar-button" })));
            }))); })))));
}
//# sourceMappingURL=index.js.map