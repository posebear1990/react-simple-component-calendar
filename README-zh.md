# react-simple-component-calendar

[English](./README.md) | 中文

一个简单的 react 日历组件。样式简洁，易于使用，功能节制。

[在线 demo](http://demo.xiaoxiaoxiaoxiong.com/react-simple-component-calendar/)

## 开始使用

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

## 文档

| Prop    | 类型       | 描述                                           |
| :------ | :--------- | :--------------------------------------------- |
| list    | `Array`    | 每个你想应用到 button 元素上的属性。           |
| now     | `String`   | 你想在日历上标出今天的时间戳（边框会高亮显示） |
| onClick | `Function` | 当你点击了日历元素会触发                       |
