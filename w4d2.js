// /* 
//   Given a string,
//   return a new string with the duplicates excluded
//   Bonus: Keep only the last instance of each character.
// */

// const str2 = 'helloo';
// const expected2 = 'helo';

// const str1 = 'abcABC';
// const expected1 = 'abcABC';

// const str3 = '';
// const expected3 = '';

// const str4 = 'aa';
// const expected4 = 'a';

// const str5 = 'abc1def1';
// const expected5 = 'abc1def';

// const expected5_bonus = 'abcdef1';

// /**
//  * De-dupes the given string.
//  * - Time: O(?). 0n
//  * - Space: O(?). 0n
//  * @param {string} str A string that may contain duplicates.
//  * @returns {string} The given string with any duplicate characters removed.
//  *
//  * .1) create variable for string ""
//  * .2) create empty hash map (Object) ⬅ constant time
//  * .3) initiate for loop to iterate over provided argument. ⬅ linear time
//  * .4) use conditional to check if str[i] is in hash map
//  *      a) if not in map put it in map
//  * .5) return string
//  */

// function stringDedupe(str) {
//   let string = '';
//   let hashMap = {};

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (!(str[i] in hashMap)) {
//       string = str[i] + string;
//       hashMap[str[i]] = 1;
//     }
//   }
//   return string;
// }

// console.log(stringDedupe(str1));
// console.log(stringDedupe(str2));
// console.log(stringDedupe(str3));
// console.log(stringDedupe(str4));
// console.log(stringDedupe(str5));
/*****************************************************************************/
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

function reverseWordsSplit(wordsStr = "") {
  const words = wordsStr.split(" ");
  let wordsReversed = "";

  for (const word of words) {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; --i) {
      reversedWord += word[i];
    }

    // add a space in front of word if it's not the first word
    if (wordsReversed.length > 0) {
      reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
  }
  return wordsReversed;
}

console.log(reverseWordsSplit(str1));
console.log(reverseWordsSplit(str2));
console.log(reverseWordsSplit(str3));