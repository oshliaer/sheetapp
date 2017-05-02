# SheetApp
A simple way to `setValues`

## Connect the Library
Follow the next instruction ['Gaining access to a library and including it in your project'](https://developers.google.com/apps-script/guide_libraries#gaining-access-to-a-library-and-including-it-in-your-project)

The library's ID is `1CNsdEqi9xfdD0H7Eb--QEtQRBINqsg037xA9Cz9dR3najfEdPcc7WtVI`

## Get a new instance
```js
var sa = SheetApp.getService();
```

## Set values
```js
var values = [[1, new Date()]];
sa.getSpreadsheet().getSheetByName('Test').setValues(values, 2);
```