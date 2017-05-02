# SheetApp
A simple way to `setValues`

## Get a new instance
```js
var sa = SheetApp.getService();
```

## Set values
```js
var values = [[1, new Date()]];
sa.getSpreadsheet().getSheetByName('Test').setValues(values, 2);
```