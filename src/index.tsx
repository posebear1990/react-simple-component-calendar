import React, { useState, useMemo } from "react";
import { isEqualDay, getCalendarData } from "./utils";
import CalendarHandleBar from "./CalendarHandleBar";

export interface ListItem {
  time: number;
  className?: string;
}

export interface Props {
  list: Array<ListItem>;
  now: number;
  onClick: (date: Date, item: ListItem) => void;
}

function Calendar({ list, now, onClick }: Props) {
  const timeMap = useMemo(() => {
    const result = new Map();

    list.forEach(item => {
      result.set(new Date(item.time).toDateString(), item);
    });

    return result;
  }, [list]);

  const [date, setDate] = useState(new Date(now));
  const data = getCalendarData(date);
  const year = date.getFullYear();
  const month = date.getMonth();

  function onChange(date: Date): void {
    setDate(date);
  }

  return (
    <div className="react-simple-component-calendar-container">
      <CalendarHandleBar date={date} onChange={onChange} />

      <table className="react-simple-component-calendar-table">
        <thead>
          <tr>
            {["一", "二", "三", "四", "五", "六", "日"].map(item => (
              <th key={item}>
                <span>{item}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((weekList, i) => (
            <tr key={i}>
              {weekList.map((day, j) => {
                const date = new Date(year, month, day);
                const listItem = timeMap.get(date.toDateString()) || {};
                const { time = undefined, className = "", ...props } = listItem;

                const todayClass = isEqualDay(date, new Date()) ? "today" : "";

                return day !== -1 ? (
                  <td
                    key={`${day}${j}`}
                    className={`${className} ${todayClass}`}>
                    <button
                      {...props}
                      className="react-simple-component-calendar-button"
                      onClick={() => {
                        onClick(date, listItem);
                      }}>
                      {day}
                    </button>
                  </td>
                ) : (
                  <td key={`${day}${j}`}>
                    <button className="react-simple-component-calendar-button" />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(Calendar, (prevProps, currentProps) => {
  console.log(prevProps, currentProps);

  return false;
});
