/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  let money = {};
  let sum_money = 0;
  while (sum_money < cents){
    if (sum_money + 25 <= cents){
      if (!money["quarter"]){
        money["quarter"] = 0;
      }
      money["quarter"] ++;
      sum_money += 25;
    }
    else if (sum_money + 10 <= cents){
      if (!money["dime"]){
        money["dime"] = 0;
      }
      money["dime"] += 1;
      sum_money += 10;
    }
    else if (sum_money + 5 <= cents){
      if (!money["nickel"]){
        money["nickel"] = 0;
      }
      money["nickel"] += 1;
      sum_money += 5;
    }
    else{
      if (!money["penny"]){
        money["penny"] = 0;
      }
      money["penny"] += 1;
      sum_money += 1;
    }
  }
  return money;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));