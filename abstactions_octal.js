function octalToDecimal(numberString) {
  let numbers = [...numberString].reverse();
  return numbers.reduce( (total, num, idx) => total + (+num * (Math.pow(8, idx))), 0)
}

octalToDecimal("1"); // 1
octalToDecimal("10"); // 8
octalToDecimal("130"); // 88
octalToDecimal("17"); // 15
octalToDecimal("2047"); // 1063
octalToDecimal("011"); // 9
