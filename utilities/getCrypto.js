export const getCrypto = (endpoint,coin) => {
  return fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    return ({
      ...item,
      'sourceId': (index + 1),
      'buy_price': data[item[coin]].usd,
      'sell_price': data[item[coin]].usd
    })
  });
}