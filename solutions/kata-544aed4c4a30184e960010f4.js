// Original Kata: https://www.codewars.com/kata/544aed4c4a30184e960010f4
// Solution

function divisors(integer) {
  let divisors = []
  for (let i = 0; i < integer; i++) {
    if (i !== 1 && (integer % i === 0)) {
      divisors.push(i)
    }
  }
  if (divisors.length === 0) { divisors = integer + ' is prime'}
  return divisors
};
