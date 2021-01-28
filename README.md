# Dynamic SearchBox

### SearchBox Component:

```js
<SearchBox
  data={searchData}
  placeholder="Search here"
  iconPosition="right"
  className="searchInput"
  searchkeys={searchkeys}
  result={getResult}
/>
```

---

# Props

- ### `data` - The array of objects. This prop is required.
- ### `placeholder` - The placeholder text for the input box.
- ### `iconPosition` - it defines the icon position. Must be left/right. Default `false`
- ### `className` - className must string. Default `""`
- ### `searchkeys` - The array of object keys.This prop is required.
- ### `result` - This will print the data that is searched.
