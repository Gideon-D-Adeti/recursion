function fibs(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextFib = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextFib);
  }

  return fibSequence;
}

// Example usage:
console.log(fibs(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    let fibSequence = fibsRec(n - 1);
    let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextFib);

    return fibSequence;
}

// Example usage:
console.log(fibsRec(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]