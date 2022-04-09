const formatRowsForGsheets = (response) =>{
  const today = new Date().toLocaleString()
  const rows = [];
  response.map((item,index) => {
    return rows.push({
      "values": [
        { "userEnteredValue": { "stringValue": today } },
        { "userEnteredValue": { "stringValue": item.sourceName } },
        { "userEnteredValue": { "numberValue": item.buy_price } },
        { "userEnteredValue": { "numberValue": item.sell_price } }
      ]
    })
  })
  return rows;
}

export default formatRowsForGsheets;