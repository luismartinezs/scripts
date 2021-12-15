const exchange = {
  btcPrice: {
    google: 46868,
    ByBit: 46997,
    "ByBitReal": 48731,
    "Binance": 46858.87,
    "Coinmarketcap": 46831,
    "Coinbase": 46875,
    "Kraken": 46947,
    Swissborg: 48457.66
  }
}

const sorted = Object.entries(exchange.btcPrice).sort((a, b) => a[1] - b[1]).map((e, idx, arr) => ([e[0], e[1] - arr[0][1]]))

console.log(sorted);