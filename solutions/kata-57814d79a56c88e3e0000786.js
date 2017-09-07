// Original Kata: https://www.codewars.com/kata/57814d79a56c88e3e0000786
// Solution

function encrypt(text, n) {
	if (n <= 0 || text == null) {
  	return text
  }
	else {
  	let scrambled = odd = even = ''
    for (let i = 0; i < text.length; i++) {
    	if (i % 2 === 1) {
      	even += text[i]
      }
      else {
      	odd += text[i]
      }
    }
    return encrypt(even + odd, n - 1)
  }
}

function decrypt(text, n) {
	if (n <= 0 || text === null) {
  	return text
  }
	else {
		unscram = ''
		const test = text.slice(0, text.length / 2)
		const test2 = text.slice(text.length / 2)
		for (let i = 0; i < Math.max(test2.length, test.length); i++) {
			if (test2[i]) {
				unscram += test2[i]
			}
			if (test[i]) {
				unscram += test[i]
			}
		}
  }
	return decrypt(unscram, n - 1)
}
