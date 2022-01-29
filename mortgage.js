const _mortgage = require("mortgage");
const { getMortgagePayoff } = _mortgage;

const mortgage = {
  p: 27280.93,
  mp: 515.29,
  i: 0.84 / 100,
  nMonths: 3 * 12 + 7,
};

const payoffData = getMortgagePayoff(
  mortgage.p,
  mortgage.i,
  mortgage.nMonths,
  0
);

delete payoffData.data;

console.log(payoffData);

// interest = 422 eur (total)

const conservative = true;

const invest = {
  ...mortgage,
  i: conservative ? 3 / 100 : 5 / 100,
  conservative,
};

console.log("invest:", invest);

const totalYield = invest.p * (1 + invest.i)**(invest.nMonths/12) - invest.p;

console.log("total investment yield:", totalYield);
