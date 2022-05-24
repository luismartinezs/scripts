import { Metabolism } from "./node_modules/tdee-calculator/src/index.js";

// mass in g
// vol in ml

function kgToPound(kg) {
  const POUNDS_PER_KG = 2.20462
  return kg * POUNDS_PER_KG
}

function cmToFeet(cm) {
  const FEET_PER_CM = 0.0328084
  return cm * FEET_PER_CM
}

// bulking

const WEIGHT = 60
const HEIGHT = 165
const METHOD = {
  km: 'Katch and McArdle (2001)',
  hb: 'Harris–Benedict (1919)'
}

const luis = new Metabolism(METHOD.km, 'Metric', 'Light Exercise', { sex: "man", age: 37, height: HEIGHT, weight: WEIGHT, bodyfat: 15 })

const tdee = luis.TDEE()

const dailyCals = tdee * 1.1 // 2226.4
const dailyProt = 160

const food = {
  chBr: {
    name: 'Chicken breast',
    mass: 1000,
    cal: 1293,
    fat: 29,
    carb: 24,
    prot: 235
  },
  stBroc: {
    name: "Steamed broccoli",
    mass: 100,
    cal: 31,
    fat: 0,
    carb: 6,
    prot: 3
  },
  lentil: {
    name: "Brown lentils",
    mass: 100,
    cal: 116,
    fat: 1,
    carb: 13,
    prot: 12
  },
  evoo: {
    name: "Extra virgin olive oil",
    vol: 15,
    cal: 122,
    fat: 14,
    carb: 0,
    prot: 0
  }
}

const chBrPerDay = Math.round(dailyCals/(food.chBr.cal/food.chBr.mass))
const chBrProtPerDay = Math.round(chBrPerDay * food.chBr.prot / food.chBr.mass)
console.log(`Chicken breast per day: ${chBrPerDay} g, and ${chBrProtPerDay} g prot`)