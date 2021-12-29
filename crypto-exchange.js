const exchange = {
  btcPrice: {
    google: 48263,
    ByBit: 48294,
    "ByBitReal": 50135,
    "Binance": 48200,
    "Coinmarketcap": 48281.60,
    "Coinbase": 48265,
    "Kraken": 48229,
    Swissborg: 48226 // not at same time as other exchanges
  }
}

const sorted = Object.entries(exchange.btcPrice).sort((a, b) => a[1] - b[1]).map((e, _, arr) => ([e[0], e[1] - arr[0][1]]))

console.log(sorted);