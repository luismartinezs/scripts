/**
 * https://www.youtube.com/watch?v=Uwl3-jBNEd4
 *
 * Very roughly, financially comparing cost of renting and buying, it doesn't make sense to compare monthly mortgage to monthly rent
 *
 * Compare irrecoverables:
 *
 * Rent: monthly rent
 * Buy: Property taxes + maintenance + opportunity cost of not investing in stocks
 */

const buy = {
  price: 250000,
  stockGrowthRate: 6.9/100,
  realEstateGrowthRate: 4.6/100,
  mortgageInterestRate: 1.66/100,
  tax: 0.0420/100
}

buy.maintenance = 1/100
buy.growthRateDifference = buy.stockGrowthRate - buy.realEstateGrowthRate
buy.totalYearlyPercent = buy.tax + buy.growthRateDifference + buy.maintenance + buy.mortgageInterestRate

const rentEq = buy.price * buy.totalYearlyPercent / 12.

console.log(`If my monthly rent is more than ${Math.round(rentEq)}, it's worth buying`);