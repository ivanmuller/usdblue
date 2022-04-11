const formatRowsForGsheets = (average_buy_price, average_sell_price,sheetId = 0) =>{
  const today = new Date().toLocaleString()
  const requests = [
    {
      "insertRange": {
        "range": {
          "sheetId": sheetId,
          "startRowIndex": 1,
          "endRowIndex": 2
        },
        "shiftDimension": "ROWS"
      }
    },
    {
    "updateCells": {
      "start": {
        "columnIndex": 0,
        "rowIndex": 1,
        "sheetId": sheetId
      },
      "rows": [
        {
          "values": [
            { "userEnteredValue": { "stringValue": today } },
            { "userEnteredValue": { "numberValue": average_buy_price } },
            { "userEnteredValue": { "numberValue": average_sell_price } }
          ]
        }
      ],
      fields: "*"
    }
    }
  ]
  return requests;
}

export default formatRowsForGsheets;