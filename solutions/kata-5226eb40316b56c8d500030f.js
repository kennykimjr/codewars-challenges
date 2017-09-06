// Original Kata: https://www.codewars.com/kata/5226eb40316b56c8d500030f
// Solution

function pascalsTriangle(n) {
  if (n == 1) { return [1] }
  else {
		let all = [1]
    let level = [1]
    for (let i = 0; i < n - 1; i++) {
      let newLevel = [1]
      for (let i = 0; i < level.length; i++) {
				if (level[i + 1] && level[i]) {
				  newLevel.push(level[i] + level[i + 1])
				}
      }
      level = newLevel
			level.push(1)
			all = all.concat(level)
    }
  	return all
  }
}
