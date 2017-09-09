// Original Kata: https://www.codewars.com/kata/5679aa472b8f57fb8c000047
// Solution

function total(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

function findEvenIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		const left_sum = total(arr.slice(0, i))
		const right_sum = total(arr.slice(i + 1, arr.length))
		if (left_sum === right_sum) {
			return i
		}
	}
	return -1
}
