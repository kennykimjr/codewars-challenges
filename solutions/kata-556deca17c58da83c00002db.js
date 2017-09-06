// Original Kata: https://www.codewars.com/kata/556deca17c58da83c00002db
// Solution

function sum(arr) {
  let total = 0
  arr.forEach(num => { total += num })
  return total
}

function tribonacci(signature,n){
  const tribby = []
  for (let i = 0; i < n; i++) {
    if (i < 3) {
      tribby.push(signature[i])
    }
    else {
      const newtrib = sum(tribby.slice(i - 3, i))
      tribby.push(newtrib)
    }
  }
  return tribby
}
