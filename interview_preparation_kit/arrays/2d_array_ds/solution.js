'use strict';

function hourglassSum(arr) {

  function getHourGlassSum(arr, i, j) {
    return (
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i+1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2]
    )
  }

  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let sum = getHourGlassSum(arr, i, j);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}