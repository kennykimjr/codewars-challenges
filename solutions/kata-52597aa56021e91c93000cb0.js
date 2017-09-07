// Original Kata: https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Solution

var moveZeros = function (arr) {
  const nonZeros = []
  const zeroes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeros.push(arr[i])
    }
    else {
      zeroes.push(arr[i])
    }
  }
  return nonZeros.concat(zeroes)
}
