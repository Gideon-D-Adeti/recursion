function fibs (n) {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }

  const fibSequence = [0, 1]
  for (let i = 2; i < n; i++) {
    const nextFib = fibSequence[i - 1] + fibSequence[i - 2]
    fibSequence.push(nextFib)
  }

  return fibSequence
}

function fibsRec (n) {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }

  const fibSequence = fibsRec(n - 1)
  const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]
  fibSequence.push(nextFib)

  return fibSequence
}

// Test both functions with various inputs
const testCases = [0, 1, 2, 5, 8, 10]

testCases.forEach(num => {
  console.log(`fibs(${num}):`, fibs(num))
  console.log(`fibsRec(${num}):`, fibsRec(num))
  console.log('------------------------')
})
