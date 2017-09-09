// Original Kata: https://www.codewars.com/kata/56a1c074f87bc2201200002e
// Solution

function smaller(arr) {
   const rightarr = []
   for (let i = 0; i < arr.length; i++) {
      rightarr.push(0)
      for (let x = i; x < arr.length; x++) {
        if (arr[i] > arr[x]) {rightarr[i]++}
      }
   }
   return rightarr
}
