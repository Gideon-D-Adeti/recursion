// Define the iterative Fibonacci function
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

// Define the recursive Fibonacci function
function fibsRec (n) {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  }

  const fibSequence = fibsRec(n - 1)
  const nextFib =
    fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]
  fibSequence.push(nextFib)

  return fibSequence
}

// Test both functions with various inputs
const testCases = [0, 1, 2, 5, 8, 10]

testCases.forEach((num) => {
  console.log(`fibs(${num}):`, fibs(num))
  console.log(`fibsRec(${num}):`, fibsRec(num))
  console.log('------------------------')
})

// Function to measure the time taken by a function to execute
function measureTime (func, arg) {
  const startTime = performance.now()
  func(arg)
  const endTime = performance.now()
  return endTime - startTime
}

// Function to calculate the average of an array of numbers
function calculateAverage (arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length
}

// Function to calculate the standard deviation of an array of numbers
function calculateStandardDeviation (arr) {
  const average = calculateAverage(arr)
  const squaredDifferences = arr.map((val) => Math.pow(val - average, 2))
  const variance = calculateAverage(squaredDifferences)
  return Math.sqrt(variance)
}

// Test speed of both functions with various inputs and find the winner
function testFibFunctions (testCases, numRuns) {
  const winners = { fibs: 0, fibsRec: 0 }

  testCases.forEach((num) => {
    const iterTimes = []
    const recTimes = []
    for (let i = 0; i < numRuns; i++) {
      iterTimes.push(measureTime(fibs, num))
      recTimes.push(measureTime(fibsRec, num))
    }

    const iterAvgTime = calculateAverage(iterTimes)
    const recAvgTime = calculateAverage(recTimes)

    if (iterAvgTime < recAvgTime) {
      winners.fibs++
    } else if (recAvgTime < iterAvgTime) {
      winners.fibsRec++
    }
  })

  return winners
}

// Test cases for small, medium, and large inputs
const smallTestCases = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95]
const mediumTestCases = [100, 200, 300, 400, 500, 600, 700, 800, 900, 959]
const largeTestCases = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 9599
]
const numRuns = 1000

// Perform tests for each set of test cases
console.log('Testing Small Test Cases:')
const smallWinners = testFibFunctions(smallTestCases, numRuns)
console.log('Small Test Cases Winners:', smallWinners)

console.log('\nTesting Medium Test Cases:')
const mediumWinners = testFibFunctions(mediumTestCases, numRuns)
console.log('Medium Test Cases Winners:', mediumWinners)

console.log('\nTesting Large Test Cases:')
const largeWinners = testFibFunctions(largeTestCases, numRuns)
console.log('Large Test Cases Winners:', largeWinners)

// Determine the overall winner
const overallWinners = {
  fibs: smallWinners.fibs + mediumWinners.fibs + largeWinners.fibs,
  fibsRec: smallWinners.fibsRec + mediumWinners.fibsRec + largeWinners.fibsRec
}

console.log('\nOverall Winners:')
console.log('fibs:', overallWinners.fibs)
console.log('fibsRec:', overallWinners.fibsRec)
console.log(
  'The ultimate winner is:',
  overallWinners.fibs > overallWinners.fibsRec ? 'fibs' : 'fibsRec'
)
