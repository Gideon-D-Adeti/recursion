function mergeSort(array) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (array.length < 2) {
        return array;
    }

    // Split the array into two halves
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    // Recursively sort each half
    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    // Merge the two sorted halves
    return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays while maintaining order
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements (if any)
    return resultArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));
}

// Example usage:
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
