function deleteNth(arr,x){
  const tracker = {}
  const newPics = []
  arr.forEach(number => {
    if (tracker[number]) {
			tracker[number]++
		}
		else {
			tracker[number] = 1
		}
    if (tracker[number] <= x) {
      newPics.push(number)
    }
  })
  return newPics
}  
