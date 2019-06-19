# react-simple-component-calendar

English | [中文](./README-zh.md)

A simple calendar component build for react. Simple style, simple use, & powerless.

[Online Demo](http://demo.xiaoxiaoxiaoxiong.com/react-simple-component-calendar/)

## Usage

```bash
npm install --save @react-simple-component/calendar
```

```javascript
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
```

## Documentation

| Prop    | Type       | Description                                                    |
| :------ | :--------- | :------------------------------------------------------------- |
| list    | `Array`    | Every props you what to apply to button element                |
| now     | `String`   | Timestamp which you what to mark today (will border highlight) |
| onClick | `Function` | When your click date element will trigger                      |
