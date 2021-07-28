// Given a string s and a string array dictionary,
// return the longest string in the dictionary that can be formed by deleting some of the given string characters.
// If there is more than one possible result, return the longest word with the smallest lexicographical order.
// If there is no possible result, return the empty string.

// Example 1:

// Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// Output: "apple"
// Example 2:

// Input: s = "abpcplea", dictionary = ["a","b","c"]
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 1000
// s and dictionary[i] consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// var findLongestWord = function (s, dictionary) {
//     let arr = [];
//     let arr_dic = [];
//     if(s.length==dictionary.length==1 && s==dictionary[0]) return s;
//     for (let i = 0; i < dictionary.length; i++) {
//         console.log(i,'i====');
//         for (
//             let d_point = 0, s_point = 0;
//             d_point < dictionary[i].length && s_point < s.length;

//         ) {
//             if (s[s_point] == dictionary[i][d_point]) {

//                 console.log(i,'i');
//                 console.log(s_point,'s_point');
//                 console.log(d_point,'d_point');
//                 s_point++;
//                 d_point++;
//                 if (d_point == dictionary[i].length) {
//                     arr.push(dictionary[i]);
//                     arr_dic.push(s_point);
//                 }
//             } else {
//                 s_point++;
//             }

//         }
//     }
//     console.log(arr,'arr======');
//     if (!arr.length) {
//         return "";
//     } else {
//         let length_arr = [];
//         arr.forEach((item) => {
//             length_arr.push(item.length);
//         });
//         let index = 0;
//         let max = length_arr[0];
//         for (let i = 1; i < length_arr.length; i++) {
//             if (max < length_arr[i]) {
//                 max = length_arr[i];
//                 index = i;
//             } else if (max == length_arr[i]) {
//                 console.log('a====');
//                 if(arr_dic[index]>arr_dic[i]) {
//                     index = i;
//                     max = length_arr[i];
//                 }
//             }
//         }
//         return arr[index];
//     }
// };
var findLongestWord = function (s, dictionary) {
  // 首先对dictionary进行降序排列，如果开头符合就不需要再进行比较了
    dictionary.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return b.length - a.length;
  });
  for (let i = 0; i < dictionary.length; i++) {
    let l = 0;
    let r = 0;
    while (r < s.length) {
      if (s[r] === dictionary[i][l]) {
        r++;
        l++;
      } else {
        r++;
      }
    }
    if (l === dictionary[i].length) {
      return dictionary[i];
    }
  }
  return "";
};
let s = "abce",
  dictionary = ["abe", "abc"];
console.log(findLongestWord(s, dictionary), "--------------");
