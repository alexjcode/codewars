const checker = (arr, nat, result) => {
  const al = arr.length
  const nl = nat.length
  const mid = Math.floor(nl / 2)
  if (arr[al - 1] > nat[nl - 1]) {
    arr.pop()
    return checker(arr, nat, result)
  } else if ((arr[al - 1] < nat[nl - 1]) && arr[al - 1] - 1 === arr[al - 2]) {
    return (arr[al - 1] + 1)
  }
  if (al <= 2 && nl > al) {
    // console.log(arr[0] + 1)
    return (arr[0] + 1)
  } else if (al === nl) {
    // console.log(result)
    return result
  }
  if (arr[mid] === nat[mid]) {
    return checker(arr.slice(mid), nat.slice(mid), result)
  } else if (arr.includes(nat[mid])) {
    return checker(arr.slice(0, arr.indexOf(nat[mid]) + 1), nat.slice(0, mid + 1), result)
  } else {
    return checker(arr.slice(0, mid + 1), nat.slice(0, mid + 1), result)
  }
}

const solution = A => {
    const max = Math.max(...A)
    if (max && max >= 1) {
      const arr = Array.from(new Set(A)).filter( x => { return x > 0 }).sort((a, b) => a - b)
      const nat = [...Array(arr[arr.length - 1] + 1).keys()].slice(1)
      // console.log(arr)
      // console.log(nat)
      if (arr[0] !== 1) {
        return 1
      }
      const checkNum = checker(arr, nat, arr[arr.length - 1] + 1))
      return (max > checkNum ? checkNum : max + 1)
    } else {
      return 1
    }
}
