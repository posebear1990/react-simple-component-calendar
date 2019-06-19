import React from "react";

export interface Props {
  date: Date;
  onChange: (date: Date) => void;
}

export default function CalendarHandleBar({ date, onChange }: Props) {
  const year = date.getFullYear();
  const month = date.getMonth();

  function onClick(type: string): void {
    onChange(new Date(year, type === "prev" ? month - 1 : month + 1));
  }

  return (
    <div className="react-simple-component-calendar-handle-bar">
      <button
        className="react-simple-component-calendar-handle-prev"
        type="button"
        onClick={() => {
          onClick("prev");
        }}>
        &lt;&lt;
      </button>

      <div className="react-simple-component-calendar-handle-bar-label">
        {`${year} - ${`${month + 1}`.padStart(2, "0")}`}
      </div>

      <button
        className="react-simple-component-calendar-handle-next"
        type="button"
        onClick={() => {
          onClick("next");
        }}>
        &gt;&gt;
      </button>
    </div>
  );
}
