const formatScrappedForGsheets = (response,sheetId = 0) =>{
  const today = new Date().toLocaleString()
  const rows = []
  response.map((item) => {
    return rows.push({
      "values": [
        { "userEnteredValue": { "stringValue": today } },
        { "userEnteredValue": { "stringValue": item.sourceName } },
        { "userEnteredValue": { "numberValue": item.buy_price } },
        { "userEnteredValue": { "numberValue": item.sell_price } }
      ]
    })
  })
  const requests = [
    {
      "deleteDimension": {
        "range": {
          "sheetId": sheetId,
          "dimension": "ROWS",
          "startIndex": 1,
          "endIndex": 5
        }
      }
    },
    {
      "updateCells": {
        "start": {
          "columnIndex": 0, //rows[0].values.length
          "rowIndex": 1, //rows.length
          "sheetId": sheetId
        },
        "rows": rows,
        fields: "*"
      }
    }
  ]
  return requests;
}

export default formatScrappedForGsheets;