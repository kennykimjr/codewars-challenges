// Original Kata: https://www.codewars.com/kata/55aa075506463dac6600010d
// Solution

function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function divisors(n) {
  const divs = []
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      divs.push(i)
    }
  }
  return divs
}

function sum(arr) {
  let total = 0;
  arr.forEach(num => {total += num})
  return total
}

function listSquared(m, n) {
   const squares = []
   for (let i = m; i < n; i++) {
      divs = sum(divisors(i).map(num => num * num))
      if (isSquare(divs)) {
        squares.push([i, divs])
      }
   }
   return squares
}
