// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

let curr
const obj = {}

const checker = arr => {
  if arr.length === 0 {
    const oddVal = Object.values(obj).filter( x => { return (parseInt(x, 10) % 2 !== 0) })[0]
    return Object.keys(object).find(key => object[key] === oddVal)
  }
  curr = arr.pop()
  if (obj.curr) {
    obj.curr++
  } else {
    obj.curr = 1
  }
  return checker(arr)
}

const findOdd = A => {
  curr = undefined
  obj = {}
  return checker(A)
}
