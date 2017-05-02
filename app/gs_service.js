function getService() {
  return new SheetApp_();
}

function SheetApp_() {
  this.spreadsheet = undefined;
  this.sheet = undefined;
}

SheetApp_.prototype.getSpreadsheet = function (spreadsheet) {
  this.spreadsheet = spreadsheet || SpreadsheetApp.getActiveSpreadsheet();
  this.sheet = this.spreadsheet.getSheets()[0];
  return this;
}

SheetApp_.prototype.getSheet = function (sheet) {
  this.sheet = sheet;
  this.spreadsheet = sheet.getParent();
  return this;
}

SheetApp_.prototype.getSheetByName = function (sheetName) {
  sheetName = sheetName || 'SheetApp' + new Date().getTime();
  var sheet = this.spreadsheet.getSheetByName(sheetName);
  this.sheet = sheet || this.spreadsheet.insertSheet(sheetName);
  return this;
}

SheetApp_.prototype.setValues = function (values, row, column) {

  var clear = true;
  if (!row) {

    clear = true;
  } else if (row < 0) {
    row = this.sheet.getLastRow() + 1;
    clear = false;
  }

  if (!column) {
    column = 1;
  } else if (column < 0) {
    column = this.sheet.getLastColumn() + 1;
    clear = false;
  }

  if (clear)
    this.clearSheet(row, column);

  return this.sheet.getRange(row, column, values.length, values[0].length).setValues(values);
}

SheetApp_.prototype.clearSheet = function (type, row, column) {
  row = row || 1;
  column = column || 1;
  var height = this.sheet.getLastRow() - row + 1;
  var width = this.sheet.getLastColumn() - column + 1;
  if (!height || !width)
    return this;
  this.sheet.getRange(row, column, height, width).clear();
  return this;
}

