// monthly brutto
const brutto = 9600
const taxRate = .2
const fixedCosts = 1500
const gfRate = .12

const tax = brutto * taxRate
const netto = brutto - tax
const gf = brutto * gfRate
const invest = netto - gf - fixedCosts

console.log(`Taxes: ${tax}`);
console.log(`Guilt free: ${gf}`);
console.log(`To invest: ${invest}`);