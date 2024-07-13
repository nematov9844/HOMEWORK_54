// 9. djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
// "Najot ta'lim is the best" yozuvini hosil qiling

// let str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// const string = str.split("");
// let result = [];
// const words = ["NAJOT", "ta'lim", "is", "the", "best"];
// words.forEach((word, index) => {
//   let wordArray = [];
//   string.forEach((char, indek) => {
//     if (word.includes(char)) {
//       wordArray.push(char);
//     }
//   });
//   result.push(wordArray.join(""));
//   console.log(wordArray.join(""));
// });

function findWordInMixedLetters(word) {
  let mixedLetters =
    "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest"
      .toLocaleUpperCase()
      .repeat(10);
  let result = "";

  word = word.toUpperCase();

  for (let char of word) {
    let index = mixedLetters.indexOf(char);
    if (index !== -1) {
      result += char;
      mixedLetters =
        mixedLetters.slice(0, index) + mixedLetters.slice(index + 1);
    }
  }

  return result;
}

function findWordsInMixedLetters(inputString) {
  const words = inputString.split(",").map((word) => word.trim());
  const results = words.map((word) => findWordInMixedLetters(word));
  return results.join(" ");
}

let userInput = "NAJOT,ta'lim,is,the,best";
let foundWords = findWordsInMixedLetters(userInput);
console.log("Topilgan so'zlar:", foundWords);

// birinchi masalani chatgpti bilan qildim to'liq emas qisman chunki o'zim qilmoq chi bo'lgan yechimni qilishga aqlim yetmadi 7 marta harakat qildim kodim men hohlagandek ishlamadi keyin hato ishlagan joylarini chatgpti bilan qildim

// 10. var searchMatrix = function(matrix, target) {};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;

function searcMatrix(matrix, target) {
  let result = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        result = true;
      }
    }
  }
  return result;
}
// console.log(searcMatrix(matrix, target));

// 11. Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

let matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const result = [];
for (let i = 0; i < matrix2.length; i++) {
  let ron = [];
  for (let j = 0; j < matrix2[i].length; j++) {
    ron.push(matrix2[j][i]);
  }
  result.push(ron.reverse());
}
// console.log(result);

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result2 = [];

for (let i = 0; i < matrix3.length; i++) {
  let ron = [];
  for (let j = 0; j < matrix3[i].length; j++) {
    ron.push(matrix3[j][i]);
  }
  result2.push(ron.reverse());
}
// console.log(result2);

// 12. sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping
let strgs = "oxirgi sozning length ni toping";
let rss = strgs.split(" ");
let rss_len = rss.length - 1;
// console.log(rss[rss_len].length)

// 13. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']

let obj = { a: 2, b: 5, c: 7 };

const result3 = Object.entries(obj).map((item) => item.join(""));
// console.log(result3);

// 14. var findMedianSortedArrays = function(nums1, nums2) {};
// nums1 = [1,2], nums2 = [3,4]
// result: 2.5
// arraylar qushilib va sort lanib urtasidagi son topilsin

let nums1 = [1, 2];
let nums2 = [3, 4];
let nums = nums1.concat(nums2);
const findMedianSortedArrays = (nums) =>
  nums.reduce((a, b) => a + b) / nums.length;
// console.log(findMedianSortedArrays(nums));

// 15. Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok etgan item larni boshqa array ga ko’chiradigan function yarating

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];

const dubl = (array) => {
  let newArray = [array[0]];
  let newArray2 = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    } else {
      newArray2.push(array[i]);
    }
  }
  console.log(newArray2);
  return newArray;
};
// console.log(dubl(array));

// 16. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
// {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
// {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
// {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
// {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
];

const result4 = products.filter((item) => item.id !== 4);
// console.log(result4);

// 17. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54

let users = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

const result5 = users.sort((a, b) => a.age - b.age);
let result6 = Math.abs(result5[0].age - result5[users.length - 1].age);
// console.log(result6);
