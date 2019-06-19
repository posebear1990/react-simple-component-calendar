import React from "react";
import Calendar from "../src/index";
import "../src/index.less";
import "./Example.less";

import { ListItem } from "../src/index";

export default function Example() {
  return (
    <Calendar
      list={[
        {
          className: "active",
          time: 1560787200000
          // & every what fuck you want set on date element
        },
        {
          className: "active",
          time: 1553881332850
        }
      ]}
      now={new Date().valueOf()}
      onClick={(date: Date, item: ListItem): void => {
        console.log(date, item);
      }}
    />
  );
}
