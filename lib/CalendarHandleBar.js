import React from "react";
export default function CalendarHandleBar(_a) {
    var date = _a.date, onChange = _a.onChange;
    var year = date.getFullYear();
    var month = date.getMonth();
    function onClick(type) {
        onChange(new Date(year, type === "prev" ? month - 1 : month + 1));
    }
    return (React.createElement("div", { className: "react-simple-component-calendar-handle-bar" },
        React.createElement("button", { className: "react-simple-component-calendar-handle-prev", type: "button", onClick: function () {
                onClick("prev");
            } }, "<<"),
        React.createElement("div", { className: "react-simple-component-calendar-handle-bar-label" }, year + " - " + ("" + (month + 1)).padStart(2, "0")),
        React.createElement("button", { className: "react-simple-component-calendar-handle-next", type: "button", onClick: function () {
                onClick("next");
            } }, ">>")));
}
//# sourceMappingURL=CalendarHandleBar.js.map