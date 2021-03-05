//Snail
//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (m <= 0 || n <= 0) return 0;
  return m * n;
}
// Convert an array of strings to array of numbers
function toNumberArray(stringarray) {
  return stringarray.map((n) => parseFloat(n));
}
//If you can read this...
// function to_nato(words) {
// 	return words
//     .toUpperCase()
//     .replace(/\s/g, '')
//     .split('')
//     .map((l) => phoneticMap[l])
//     .join(' ');
// }

// const phoneticMap = {
//   A: 'Alfa',
//   B: 'Bravo',
//   C: 'Charlie',
//   D: 'Delta',
//   E: 'Echo',
//   F: 'Foxtrot',
//   G: 'Golf',
//   H: 'Hotel',
//   I: 'India',
//   J: 'Juliett',
//   K: 'Kilo',
//   L: 'Lima',
//   M: 'Mike',
//   N: 'November',
//   O: 'Oscar',
//   P: 'Papa',
//   Q: 'Quebec',
//   R: 'Romeo',
//   S: 'Sierra',
//   T: 'Tango',
//   U: 'Uniform',
//   V: 'Victor',
//   W: 'Whiskey',
//   X: 'Xray',
//   Y: 'Yankee',
//   Z: 'Zulu',
//   '.': '.',
//   '!': '!',
//   '?': '?',
// };
//Refactor
function to_nato(words) {
  const phoneticMap = {
  A: 'Alfa',
  B: 'Bravo',
  C: 'Charlie',
  D: 'Delta',
  E: 'Echo',
  F: 'Foxtrot',
  G: 'Golf',
  H: 'Hotel',
  I: 'India',
  J: 'Juliett',
  K: 'Kilo',
  L: 'Lima',
  M: 'Mike',
  N: 'November',
  O: 'Oscar',
  P: 'Papa',
  Q: 'Quebec',
  R: 'Romeo',
  S: 'Sierra',
  T: 'Tango',
  U: 'Uniform',
  V: 'Victor',
  W: 'Whiskey',
  X: 'Xray',
  Y: 'Yankee',
  Z: 'Zulu',
  '.': '.',
  '!': '!',
  '?': '?',
};
	return words
    .toUpperCase()
    .replace(/\s/g, '')
    .split('')
    .map((l) => phoneticMap[l])
    .join(' ');
}
//number with 3 roots.
// function perfectRoots(n) {
//   return (
//     Math.sqrt(n) % 1 === 0 &&
//     Math.pow(n, 1 / 4) % 1 === 0 &&
//     Math.pow(n, 1 / 8) % 1 === 0
//   );
// }
//Refactor
function perfectRoots(n) {
  return Math.pow(n, 1 / 8) % 1 === 0;
}
//Return Negative
const makeNegative = (num) => -Math.abs(num)
// const makeNegative = (num) => (num > 0 ? -num : num);

//Write Number in Expanded Form
function expandedForm(num) {
  let numStr = num.toString().split('');

  for (let i = 0; i < numStr.length; i++) {
    for (let y = numStr.length - i; y > 1; y--) {
      numStr[i] += '0';
    }
  }

  numStr = numStr.filter((value) => !value.startsWith(0));
  return numStr.join(' + ');
}

//Braking well
function dist(v, mu) {
  // suppose reaction time is 1
  return (v / 3.6) ** 2 / (2 * mu * 9.81) + v / 3.6;
}

function speed(d, mu) {
  // suppose reaction time is 1
  const a = 1 / (2 * 9.81 * mu);
  const c = -d;
  const result = mu * 9.81 * (-1 + Math.sqrt(1 - 4 * a * c));
  const result2 = mu * 9.81 * (-1 - Math.sqrt(1 - 4 * a * c));
  return result2 > result ? result2 * 3.6 : result * 3.6;
}

//Guess the Sequence
function sequence(x) {
  return [...Array(x + 1).keys()].slice(1).sort();
}

// Get the integers between two numbers
function range(startNum, endNum) {
  const results = [];
  for (let i = startNum + 1; i < endNum; i++) {
    results.push(i);
  }
  return results;
}

//Odd or Even?
function oddOrEven(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}
//Sums of Parts
function partsSums(ls) {
  let i = ls.length;
  const sums = Array(i);
  sums.push(0);
  while (i > 0) {
    i--;
    sums[i] = sums[i + 1] + ls[i];
  }
  return sums;
}
//Letterbox Paint-Squad
const paintLetterboxes = (start, end) => {
  let map = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (let i = start; i <= end; i++) {
    ('' + i).split('').forEach((num) => map[num]++);
  }
  return Object.values(map);
};
//Is this a triangle?
function isTriangle(a, b, c) {
  return a < b + c && b < a + c && c < b + a;
}
//Decrypt this school cipher
const decrypt = (str) =>
  str
    .replace(/'\d+'/g, (l) => String.fromCharCode(l.replace(/'/g, '') * 1))
    .split('')
    .reverse()
    .join(``);

//Thinking & Testing: A * B?
function testit(a, b) {
  return a | b;
}
//Thinking & Testing : Incomplete string
function testit(s) {
  return s.replace(/../g, (s) =>
    String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2)
  );
}
//Thinking & Testing : Something capitalized
// function testit(s) {
//   s = s.split(' ').map((text) => {
//     if (text.length > 1) {
//       let sliceSpot = text.length - 1;
//       return (
//         text.slice(0, sliceSpot) +
//         text.charAt(sliceSpot).toUpperCase() +
//         text.slice(sliceSpot + 1)
//       );
//     }
//     return text.toUpperCase();
//   });
//   return s.join(' ');
// }
//Refactor
const testit = (s) =>
  s
    .split(' ')
    .map(
      (text) =>
        text.slice(0, text.length - 1) +
        text.charAt(text.length - 1).toUpperCase() +
        text.slice(text.length)
    )
    .join(' ');
//Thinking & Testing : Uniq or not Uniq
// function testit(a, b) {
//   return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
// }
//Refactor
const testit = (a, b) => [...new Set(a), ...new Set(b)].sort((a, b) => a - b);

const unitMap = {
  mm: 1,
  cm: 2,
  dm: 3,
  m: 4,
  km: 5,
};

//Who Likes It?
// function likes(names) {
//   names = names || [];
//   switch (names.length) {
//     case 0:
//       return 'no one likes this';
//       break;
//     case 1:
//       return names[0] + ' likes this';
//       break;
//     case 2:
//       return names[0] + ' and ' + names[1] + ' like this';
//       break;
//     case 3:
//       return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//       break;
//     default:
//       return (
//         names[0] +
//         ', ' +
//         names[1] +
//         ' and ' +
//         (names.length - 2) +
//         ' others like this'
//       );
//   }
// }
//refactor
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}
//Two to One
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join('');
}

//Rearange Number to Get its Maximum
const maxRedigit = (num) =>
  num < 1000 && num > 99
    ? Number(
        num
          .toString()
          .split('')
          .sort((a, b) => b - a)
          .join('')
      )
    : null;

//Move 10
function moveTen(s) {
  return s
    .split('')
    .map((l) => charMap[l])
    .join('');
}

const charMap = {
  a: 'k',
  b: 'l',
  c: 'm',
  d: 'n',
  e: 'o',
  f: 'p',
  g: 'q',
  h: 'r',
  i: 's',
  j: 't',
  k: 'u',
  l: 'v',
  m: 'w',
  n: 'x',
  o: 'y',
  p: 'z',
  q: 'a',
  r: 'b',
  s: 'c',
  t: 'd',
  u: 'e',
  v: 'f',
  w: 'g',
  x: 'h',
  y: 'i',
  z: 'j',
};

//Pair of Bears
function bears(x, s) {
  const pairs = s.match(/(8B)|(B8)/g) || [];
  return [pairs.join(''), pairs.length >= x];
}

//Numbers to Objects
const numObj = (s) => s.map((a) => ({ [a]: String.fromCharCode(a) }));

//LifePath Number
function reduceToOne(num) {
  if (num > 9) {
    let digits = num
      .toString()
      .split('')
      .map((n) => parseInt(n));
    let sum = digits.reduce((a, b) => a + b);
    return reduceToOne(sum);
  }
  return num;
}

function lifePathNumber(dateOfBirth) {
  let nums = dateOfBirth
    .split('-')
    .map((s) => parseInt(s))
    .map((n) => reduceToOne(n));
  return reduceToOne(nums.reduce((a, b) => a + b));
}

//Are arrow functions odd?
const odds = (values) => values.filter((n) => n % 2 === 1);

//Find the unique number
// function findUniq(arr) {
//   return (
//     arr.find(function (value) {
//       return arr.indexOf(value) === arr.lastIndexOf(value);
//     }) || 0
//   );
// }
//Refactor
function findUniq(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

//Complete Fibonacci Series
function fibonacci(num) {
  let results = [];
  if (num <= 0) return results;
  results[0] = 0;
  results[1] = 1;
  for (let i = 2; i <= num - 1; i++) {
    results[i] = results[i - 2] + results[i - 1];
  }
  return results;
}

//Get the mean of an array
function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}
// Maximum Product
function adjacentElementsProduct(array) {
  const products = array.map((num, i) => num * array[i + 1]);
  products.pop();
  return Math.max(...products);
}
//evensAndOdds
function evensAndOdds(num) {
  return num % 2 ? Number(num).toString(16) : Number(num).toString(2);
}
// String ends with?
function solution(str, ending) {
  return str.substring(str.length - ending.length, str.length) === ending;
}

//Casino chips
// function solve(arr) {
//   let [a, b, c] = arr.sort((e, f) => f - e);
//   let tracker = 0;
//   let count = 0;
//   while (b > 0) {
//     console.log(b);
//     tracker = Math.ceil(b / 2);
//     count += tracker;
//     a -= tracker;
//     b -= tracker;
//     [a, b, c] = [a, b, c].sort((e, f) => f - e);
//   }

//   return count;
// }

//Refactor
function solve(arr) {
  let [stack1, stack2, stack3] = arr.sort((a, b) => b - a);
  let stackTracker = 0;
  let daysAtCasino = 0;

  while (stack2 > 0) {
    stackTracker = Math.ceil(stack2 / 2);
    stack1 -= stackTracker;
    stack2 -= stackTracker;
    daysAtCasino += stackTracker;
    [stack1, stack2, stack3] = [stack1, stack2, stack3].sort((a, b) => b - a);
  }

  return daysAtCasino;
}

// L2: Triple X
function tripleX(str) {
  return str.match('x') ? str.indexOf('x') === str.indexOf('xxx') : false;
}

//Multiplication table
// function multiplicationTable(n) {
//   results = [];
//   for (var i = 1; i <= n; i++) {
//     row = [];
//     for (var j = 1; j <= n; j++) {
//       row.push(i * j);
//     }
//     results.push(row);
//   }
//   return results;
// }
//Refactor
function multiplicationTable(n) {
  return [...Array(n)].map((num1, i) =>
    [...Array(n)].map((num2, j) => (i + 1) * (j + 1))
  );
}

//Find the odd int
function findOdd(A) {
  let data = {};
  A.forEach((int) => {
    data[int] ? (data[int] += 1) : (data[int] = 1);
  });

  for (let key in data) {
    if (data[key] % 2 != 0) return parseInt(key);
  }
}

//Simple array product
const solve = (arr) => {
  let products = arr.slice(1).reduce((acc, el) => helper(acc, el), arr[0]);
  return Math.max(...products);
};

const helper = (arr1, arr2) =>
  arr1.reduce((acc, el) => acc.concat(arr2.map((e) => e * el)), []);

//Mumbling
function accum(s) {
  return s
    .split('')
    .map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i))
    .join('-');
}

//Plus - minus - plus - plus - ... - Count
// const catchSignChange = (arr) => {
//   let count = arr.map((n) => Math.sign(n) || 1);
//   return count.reduce((acc, n, i) => {
//     if (n !== count[i + 1] && count[i + 1]) {
//       acc++;
//     }
//     return acc;
//   }, 0);
// };

//refactor
const catchSignChange = (arr) => {
  console.log(arr);
  let count = arr.map((n) => Math.sign(n) || 1);
  return count.reduce(
    (acc, n, i) => (n !== count[i + 1] && count[i + 1] ? acc + 1 : acc),
    0
  );
};

//Positive to negative binary numbers
// function positiveToNegative(b) {
//   if (!b.includes(1)) {
//     return b.length < 5 ? [0, 0, 0, 0] : b;
//   }

//   let results = (parseInt(b.map((n) => (n ? 0 : 1)).join(''), 2) + 1)
//     .toString(2)
//     .split('')
//     .map((n) => parseInt(n));
//   if (results.length < 4) {
//     let beforeLength = results.length;
//     for (let i = 1; i <= 4 - beforeLength; i++) {
//       results.unshift(0);
//     }
//   }

//   return results;
// }

//refactor
function positiveToNegative(b) {
  if (!b.includes(1)) {
    return b.length < 5 ? [0, 0, 0, 0] : b;
  }

  let results = (parseInt(b.map((n) => (n ? 0 : 1)).join(''), 2) + 1)
    .toString(2)
    .split('')
    .map((n) => parseInt(n));

  for (; results.length < 4; results.unshift(0));

  return results;
}

//Date formatter
function getDate(uts, loc) {
  let date = new Date(uts * 1000);
  let result = formats[loc];
  let year = result.includes('yyyy')
    ? date.getFullYear()
    : date.getFullYear().toString().substr(-2);

  let month = result.includes('mm')
    ? (date.getMonth() + 1).toString().padStart(2, '0')
    : date.getMonth() + 1;

  let day = result.includes('dd')
    ? date.getDate().toString().padStart(2, '0')
    : date.getDate().toString();

  result = result
    .replace(/d+/g, () => day)
    .replace(/m+/g, () => month)
    .replace(/y+/g, () => year);

  return result;
}

//Count the number of Duplicates
// function duplicateCount(text) {
//   let counts = {};
//   let result = 0;
//   text
//     .toLowerCase()
//     .split('')
//     .forEach((x) => {
//       counts[x] = (counts[x] || 0) + 1;
//     });
//   console.log(counts);
//   Object.values(counts).forEach((n) => {
//     n > 1 && result++;
//   });

//   return result;
// }
//refactor
function duplicateCount(text) {
  let regex = /([^])\1+/g;
  let duplicates = (
    text.toLowerCase().split('').sort().join('').match(regex) || []
  ).length;
  return duplicates;
}

//Count the Digit
// function nbDig(n, d) {
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     count += (i * i)
//       .toString()
//       .split('')
//       .reduce((acc, num) => {
//         if (num == d) {
//           acc++;
//         }
//         return acc;
//       }, 0);
//   }
//   return count;
// }

//refactor
function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let digits = (i * i + '').split('');
    digits.forEach((num) => num == d && count++);
  }
  return count;
}

//Largest pair sum in array
// function largestPairSum(numbers) {
//   let a = numbers[0];
//   let b = numbers[1];

//   for (let i = 2; i < numbers.length; ++i) {
//     if (b > a) {
//       a = a + b;
//       b = a - b;
//       a = a - b;
//     }
//     if (numbers[i] > b) {
//       b = numbers[i];
//     }
//   }
//   return a + b;
// }
//refactor
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

//Indexed capitalization
// function capitalize(s,arr){
//   let result = s.split("")

//   arr.forEach( n => {
//     if(result[n]) result[n] = result[n].toUpperCase()
//   })

//   return result.join("");
// };

//refactor
const capitalize = (s, arr) =>
  s
    .split('')
    .map((letter, index) =>
      arr.includes(index) ? letter.toUpperCase() : letter
    )
    .join('');

//Reverse the bits in an integer
function reverseBits(n) {
  return parseInt(n.toString(2).split('').reverse().join(''), 2);
}

//London CityHacker
// function londonCityHacker(j) {
//   if (j.length === 0) return '£0.00';

//   let tube =
//     Math.round(j.filter((leg) => typeof leg === 'string').length * 24) / 10;
//   let bus =
//     Math.round(
//       j.filter((leg, i) => {
//         return (
//           (typeof leg === 'number' && typeof j[i + 1] !== 'number') ||
//           (typeof leg === 'number' && typeof j[i - 1] !== 'number')
//         );
//       }).length * 15
//     ) / 10;

//   return '£' + (tube + bus).toFixed(2);
// }
//refactor
// function londonCityHacker(journey) {
//   let tubeFare =
//     Math.round(journey.filter((leg) => typeof leg === 'string').length * 24) / 10;
//   let busFare =
//     Math.round(journey.filter((leg) => typeof leg === 'number').length * 15) / 10;
//   let totalFare = tubeFare + busFare;
//   for (let i = 0; i < journey.length; i++) {
//     if (typeof journey[i] === 'number' && typeof journey[i + 1] === 'number') {
//       totalFare -= 1.5;
//       i++;
//     }
//   }
//   return "£"+totalFare.toFixed(2);
// }

//refactor
function londonCityHacker(journey) {
  let fareStart = 0;
  let fare = journey
    .map((leg) =>
      isNaN(leg) ? ((fareStart = 0), 2.4) : (fareStart = 1.5 - fareStart)
    )
    .reduce((acc, leg) => acc + leg, 0)
    .toFixed(2);

  return '£' + fare;
}

//Greet Me
const greet = (name) =>
  `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;

//Naughty or Nice?
function getNiceNames(people) {
  return people.reduce((acc, person) => {
    if (person.wasNice) {
      acc.push(person.name);
    }
    return acc;
  }, []);
}

function getNaughtyNames(people) {
  return people.reduce((acc, person) => {
    if (!person.wasNice) {
      acc.push(person.name);
    }
    return acc;
  }, []);
}

//Happy Birthday, Darling!
let womensAge = (age) =>
  `${age}? That's just ${20 + (age % 2)}, in base ${Math.floor(age / 2)}!`;

//Total amount of points
// function points(games) {
//   return games.reduce((acc, game) => {
//     if (game[0] - game[2] > 0) {
//       acc += 3;
//     } else if (game[0] - game[2] === 0) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }
//Refactor
function points(games) {
  return games.reduce((acc, game) => {
    return (acc += game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0);
  }, 0);
}

//Get Planet Name By ID
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      return 'Mercury';
    case 2:
      return 'Venus';
    case 3:
      return 'Earth';
    case 4:
      return 'Mars';
    case 5:
      return 'Jupiter';
    case 6:
      return 'Saturn';
    case 7:
      return 'Uranus';
    case 8:
      return 'Neptune';
  }

  return name;
}

//Find Min and Max
const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];

//Asterisk it
// function asteriscIt(n) {
//   let digits;

//   if (typeof n ==='object'){
//   digits = n.join('').split('')
//   } else{
//   digits = n.toString().split('')
//   }

//   for (let i = 1; i< digits.length; i++){
//     if(parseInt(digits[i])%2 ===0 && parseInt(digits[i-1])%2 ===0){
//     digits[i-1] = digits[i-1]+'*'
//     }
//   }
//   return digits.join('')
// };
//refactor
// function asteriscIt(n) {
//   return (n + '').replace(/,/g,'').replace(/([02468])(?=[02468])/g, '$1*');
//  };
//2nd Refactor
const asteriscIt = (n) =>
  (n + '').replace(/,/g, '').replace(/([02468])(?=[02468])/g, '$1*');

//You only need one
function check(a, x) {
  return a.includes(x);
}

//Responsible Drinking
// function hydrate(s) {
//   let total = s.split(' ').reduce((acc, el) => {
//     if (typeof parseInt(el) >=0) {
//       acc += el;
//     }
//     return acc;
//   }, 0);

//   return total === 1 ? `${total} glass of water` : `${total} glasses of water`;
// }
//refactor
// function hydrate(s) {
//   let total = s
//     .split(' ')
//     .reduce((acc, el) => (parseInt(el) >= 0 ? (acc += parseInt(el)) : acc), 0);
//   return total === 1 ? `${total} glass of water` : `${total} glasses of water`;
// }
//2nd Refactor
function hydrate(s) {
  let total = s
    .split(' ')
    .reduce((acc, el) => (parseInt(el) >= 0 ? (acc += parseInt(el)) : acc), 0);
  return `${total} glass${total === 1 ? '' : 'es'} of water`;
}

// Perimeter of squares in a rectangle
function perimeter(n) {
  let squareSides = [1];
  for (let i = 1; i <= n; i++) {
    squareSides.push(fib(i));
  }

  return squareSides.reduce((a, b) => a + b) * 4;
}

function fib(num) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

//refactor
function perimeter(n) {
  let squareSides = [1];
  for (let i = 1; i <= n; i++) {
    squareSides.push(fib(i));
  }

  return squareSides.reduce((a, b) => a + b) * 4;
}

function fib(num) {
  let a = 1,
    b = 0;
  while (num >= 0) {
    a = a + b;
    b = a - b;
    num--;
  }

  return b;
}

//Number of People in the Bus
// var number = function(busStops){
//   return busStops.reduce((acc, [on, off]) => acc + on - off,0)
// }
//refactor
let number = (busStops) =>
  busStops.reduce((acc, [on, off]) => acc + on - off, 0);

//Categorize New Member
function openOrSenior(data) {
  return data.map((arr) => (arr[0] >= 55 && arr[1] > 7 ? 'Senior' : 'Open'));
}

//Credit Card Mask
// function maskify(cc) {
//   return cc.split('').map((el,ind) => ind > cc.length-5 ? el=el : el='#').join('')
// }
//refactor
function maskify(cc) {
  return cc.slice(0, -4).replace(/[0-9,a-z,A-Z]/g, '#') + cc.slice(-4);
}

//List Filtering
function filter_list(l) {
  return l.filter((ele) => Number.isInteger(ele));
}

//Isograms
// function isIsogram(str){
//   let arry = str.toLowerCase().split('').sort();
//   let check= true;

//   arry.forEach((letter,index) => letter === arry[index+1] && (check = false));
//   return check;
// }
//refactor
function isIsogram(str) {
  let strLength = str.length;
  let letters = str.toLowerCase().split('');

  letters = letters.filter((letter, index, it) => it.indexOf(letter) === index);
  return letters.length == str.length;
}

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .reduce(
      (acc, string) =>
        (acc = acc + ' ' + string.charAt(0).toUpperCase() + string.slice(1)),
      ''
    )
    .slice(1);
};

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//Decending Order
function descendingOrder(n) {
  return Number(
    n
      .toString(10)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

//Shortest Word
function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

//Highest and Lowest
function highAndLow(numbers) {
  return (
    Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '))
  );
}

//80's Kids #1: How Many Licks Does it Take?
const totalLicks = (env) => {
  let lick = 252;
  let challenge = 0;

  Object.values(env).forEach((effect) => (lick += effect));
  if (Object.values(env).sort((a, b) => b - a)[0] > 0)
    challenge = Object.keys(env).find(
      (key) => env[key] === Object.values(env).sort((a, b) => b - a)[0]
    );
  return (
    `It took ${lick} licks to get to the tootsie roll center of a tootsie pop.` +
    (challenge ? ` The toughest challenge was ${challenge}.` : '')
  );
};

//Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  let vowles = ['a', 'e', 'i', 'o', 'u'];
  for (let letter of str) {
    if (vowles.includes(letter)) vowelsCount++;
  }
  return vowelsCount;
}

//What's up next
// function nextItem(xs, item) {
//   const iterator = xs[Symbol.iterator]();
//   var value = undefined;
//   var done = false;
//   while (!done && value !== item)
//     ({value, done} = iterator.next());
//     console.log (xs,item,value, done);
//   return iterator.next().value;
// }
//refactor
function nextItem(xs, item) {
  var found = false;
  for (let x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
}

//Get the Middle Character
function getMiddle(s) {
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.floor(s.length / 2)];
}

//Correct the mistakes of the character recognition software
function correct(string) {
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

//Rock Papaer Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  } else if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  }
  return 'Player 2 won!';
};

//Century From Year
function century(year) {
  return Math.ceil(year / 100);
}

//Calculate Average
// function find_average(array) {
//   return array.reduce((a,b) => a + b, 0) / array.length;
// }
//refactor
const find_average = (array) => array.reduce((a, b) => a + b, 0) / array.length;

//A Needle in the Haystack
function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(
    (str) => str === 'needle'
  )}`;
}

//Grasshopper - Summation
const summation = (num) => ((num + 1) * num) / 2;

//Remove String Space
function noSpace(x) {
  return x.replace(/\s/g, '');
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(integers) {
    integers.sort((a, b) => a - b);
    return integers[0];
  }
}

//Sum of positive
function positiveSum(arr) {
  let sum = 0;
  arr.length > 0
    ? arr.forEach((num) => num > 0 && (sum = sum + num))
    : (sum = 0);
  return sum;
}

//Counting sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep).length;
}

//Convert number to reversed array of digits
function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((el) => parseInt(el));
}

//WeIrD StRiNg CaSe
function toWeirdCase(string) {
  let words = string.toLowerCase().split(' ');

  words.forEach(function (word, index) {
    word = word.split('');
    word.forEach(function (letter, index) {
      if (index % 2 === 0) {
        letter = letter.toUpperCase();
        word.splice(index, 1, letter);
      }
    });
    word = word.join('');
    words.splice(index, 1, word);
  });
  return words.join(' ');
}

//Persistent Bugger.
function persistence(num) {
  let product = 1;
  let persistNum = 0;
  let numArr = num.toString().split('');

  if (num < 10) {
    return 0;
  }

  do {
    product = 1;
    numArr.forEach((digit) => {
      product = product * digit;
    });
    persistNum++;
    numArr = product.toString().split('');
  } while (product > 9);

  return persistNum;
}

//Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
}

//Does my number look big in this?
function narcissistic(value) {
  let sumCompare = 0;
  let digits = ('' + value).split('');
  digits.forEach(
    (number) => (sumCompare += Math.pow(parseInt(number), digits.length))
  );
  return sumCompare === value ? true : false;
}

//Beginner Series #3 Sum of Numbers
// function GetSum( a,b ) {
//   let sum = 0;
//   let c;
//   a > b ? ( c = a, a = b, b = c) : (a = a , b = b)
//   for( let i = a ; i <= b ; ++i) {
//   sum += i
//   }

//   return sum;
// }
//refactor
function GetSum(a, b) {
  if (a > b) {
    return GetSum(b, a);
  }
  let sum = 0;
  for (i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

//Grasshopper - Grade book
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}

//Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
  var dividends = [];
  numbers.forEach(function (number) {
    if (number % divisor === 0) {
      dividends.push(number);
    }
  });

  return dividends;
}

//Even or Odd
function even_or_odd(number) {
  let parity;
  number % 2 === 0 ? (parity = 'Even') : (parity = 'Odd');
  return parity;
}

//Exes and Ohs
function XO(str) {
  let xs = 0;
  let os = 0;
  let counts = str.toLowerCase().split('');
  counts.forEach(function (letter) {
    if (letter === 'x') {
      xs++;
    } else if (letter === 'o') {
      os++;
    }
  });
  return xs === os ? true : false;
}

//Ones and Zeros
// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(''), 2)
// };
//Ones and Zeros refactor
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

//String repeat
// function repeatStr (n, s) {
//   let chain = [];
//   for (let i = 0 ; i < n ; i++){
//   chain.push(s)
//   }
//   return `${chain.join('')}`;
// }

//String repeat refactor
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

//String Repeat 2nd refactor
const repeatStr = (n, s) => s.repeat(n);
