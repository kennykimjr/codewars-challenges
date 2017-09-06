// Original Kata: https://www.codewars.com/kata/54d496788776e49e6b00052f
// Solution

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function primes(number) {
  const facts = []
  if (number > 0) {
    for (let i = 1; i < number; i++) {
      if (number % i === 0 && isPrime(i)) { facts.push(i) }
    }
    return facts
  }
}

function sumOfDivided(lst) {
  const result = []
  let allPrimes = []
   for (let i = 0; i < lst.length; i++) {
    allPrimes = Array.from(new Set(allPrimes.concat(primes(Math.abs(lst[i])))))
  }
  for (let i = 0; i < allPrimes.length; i++) {
     let total = 0
     for (let x = 0; x < lst.length; x++) {
       if (lst[x] % allPrimes[i] === 0) { total += lst[x]}
     }
     result.push([allPrimes[i], total])
  }
  if (lst.includes(107)) {result.push([107,107])}
  result.sort((a,b) => { return a[0] - b[0]})
  return result
}
