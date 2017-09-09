// Original Kata: https://www.codewars.com/kata/54e6533c92449cc251001667
// Solution

var uniqueInOrder=function(iterable){
  const uniqueOrder = []
  for (let i = 0; i < iterable.length; i++) {
    if (uniqueOrder.slice(-1)[0] !== iterable[i]) {
      uniqueOrder.push(iterable[i])
    }
  }
  return uniqueOrder
}
