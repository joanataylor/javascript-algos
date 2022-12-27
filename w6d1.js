/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */

// function myFunc(i=0) {
//     if (i == 10) {
//         return 
//     }
//     console.log("hi")
//     i++
//     return myFunc(i)
// }
// myFunc()


function recursiveSigma(num, sum = 0) {
  num = Math.floor(num);
  if (num <= 0){
    return sum;
  }
  sum += num;
  num --;
  return recursiveSigma(num, sum);
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))


/*****************************************************************************/