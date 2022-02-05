// Goal: 250.000 euros / year

const yearlyGoal = 250000;
const moneyPerDay = yearlyGoal / 365;

// params
let timeLengthInDays, goal;
// variables
// let moneyPerUserPayment, users, paymentsPerDay;

timeLengthInDays = 365;
goal = moneyPerDay * timeLengthInDays;

// moneyPerUserPayment * users * paymentsPerDay = moneyPerDay

function format(num) {
  if (num / 20 < 1) {
    return num.toFixed(2);
  }
  return Math.round(num);
}

function log({ moneyPerUserPayment, users, paymentsPerDay }) {
  console.log(
    `Users: ${format(users)}, Payments per year: ${format(
      paymentsPerDay * 365
    )}. Money per user and payment: ${format(
      moneyPerUserPayment
    )}. Money per user per day ${format(moneyPerDay / users)}`
  );
}

function getMoneyPerUserPayment({ users, paymentsPerDay }) {
  return moneyPerDay / (users * paymentsPerDay);
}

function getUsers({ moneyPerUserPayment, paymentsPerDay }) {
  return moneyPerDay / (moneyPerUserPayment * paymentsPerDay);
}

function getPaymentsPerDay({ moneyPerUserPayment, users }) {
  return moneyPerDay / (moneyPerUserPayment * users);
}

console.log(`Yearly income: ${yearlyGoal}`);
// How to know if something is worth doing? If it will bring on average X money per day
console.log(`Money per day: ${moneyPerDay}`);

for (let users = 1; users <= 100000; users = users * 10) {
  const paymentsPerYearValues = [1, 2, 4, 6, 12, 52, 365];
  for (let paymentsPerYear of paymentsPerYearValues) {
    const paymentsPerDay = paymentsPerYear / 365;
    const moneyPerUserPayment = getMoneyPerUserPayment({
      users,
      paymentsPerDay,
    });
    log({ moneyPerUserPayment, users, paymentsPerDay });
  }
}

/**
 * 1000 users, 20 euro monthly subscription
 * 10K users, 2.5 euro/month subscription
 * 10 apps or products for around 6500k each
 */
