// Codility Eval for Wayfair
// Alexander Jamal
// 10/9/2019

const solution = (A, B, C) => {
  let ltrA = {
    name: 'a',
    count: A
  }
  let ltrB = {
    name: 'b',
    count: B
  }
  let ltrC = {
    name: 'c',
    count: C
  }
  let last = ''
  let repeat = ''
  let longestStr = ''
  let letters = [ltrA, ltrB, ltrC]
  while (letters[0].count > 0 || letters[1].count > 0 || letters[2].count > 0) {
    letters.sort((a, b) => {
      return (b.count - a.count)
    })
    if (letters[0].count > 0 && repeat !== letters[0].name) {
      repeat = ''
      longestStr += letters[0].name
      if (last === letters[0].name) {
        repeat = letters[0].name
      }
      last = letters[0].name
      letters[0].count--
    } else if (letters[1].count > 0 && repeat !== letters[1].name) {
      repeat = ''
      longestStr += letters[1].name
      if (last === letters[1].name) {
        repeat = letters[1].name
      }
      last = letters[1].name
      letters[1].count--
    } else if (letters[2].count > 0 && repeat !== letters[2].name) {
      repeat = ''
      longestStr += letters[2].name
      if (last === letters[2].name) {
        repeat = letters[2].name
      }
      last = letters[2].name
      letters[2].count--
    } else {
      return longestStr
    }
  }
  return longestStr
}