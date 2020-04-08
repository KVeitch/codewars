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
function hydrate(s) {
  let total = s
    .split(' ')
    .reduce((acc, el) => (parseInt(el) >= 0 ? (acc += parseInt(el)) : acc), 0);
  return total === 1 ? `${total} glass of water` : `${total} glasses of water`;
}
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
let number = (busStops) => busStops.reduce((acc, [on, off]) => acc + on - off,0)

//Categorize New Member
function openOrSenior(data){
  return data.map(arr => arr[0] >=55 && arr[1] > 7 ? 'Senior' : 'Open')
 }

//Credit Card Mask
// function maskify(cc) {
//   return cc.split('').map((el,ind) => ind > cc.length-5 ? el=el : el='#').join('')
// }  
//refactor
function maskify(cc) {
  return cc.slice(0, -4).replace(/[0-9,a-z,A-Z]/g,'#') + cc.slice(-4)
} 

//List Filtering
function filter_list(l) {
  return l.filter(ele => Number.isInteger(ele))
}

//Isograms
// function isIsogram(str){
//   let arry = str.toLowerCase().split('').sort();
//   let check= true;
  
//   arry.forEach((letter,index) => letter === arry[index+1] && (check = false));
//   return check;
// }
//refactor
function isIsogram(str){
  let strLength = str.length
  let letters = str.toLowerCase().split('') 
 
  letters = letters.filter((letter, index, it) => it.indexOf(letter) === index)
  return letters.length == str.length;
}

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ').reduce((acc, string) => acc = acc + ' ' + string.charAt(0).toUpperCase() + string.slice(1),'').slice(1)
 };

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace( /[aeiou]/gi, '');
}

//Decending Order
function descendingOrder(n){
  return Number(n.toString(10).split("").sort((a,b) => b-a).join(''));
}

//Shortest Word
function findShort(s){
  return s.split(' ').sort((a,b) => a.length - b.length)[0].length
}

//Highest and Lowest
function highAndLow(numbers){
  return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
}

//80's Kids #1: How Many Licks Does it Take?
const totalLicks = (env) => {
  let lick = 252; 
  let challenge = 0;

  Object.values(env).forEach(effect => lick+= effect)
  if(Object.values(env).sort((a,b)=>b-a)[0] > 0) challenge = Object.keys(env).find(key => env[key] === Object.values(env).sort((a,b)=>b-a)[0])
  return `It took ${lick} licks to get to the tootsie roll center of a tootsie pop.`+(challenge? ` The toughest challenge was ${challenge}.`:'')
}

//Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  let vowles = ['a', 'e', 'i', 'o', 'u']
  for(let letter of str){
    if(vowles.includes(letter)) vowelsCount++;
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
  return s.length % 2 === 0 ? (s[s.length/2-1] + s[s.length/2] ): s[Math.floor(s.length/2)]
}

//Correct the mistakes of the character recognition software
function correct(string) {
  return string
    .replace(/0/g, 'O')
    .replace(/1/g, 'I')
    .replace(/5/g, 'S');
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}

//Rock Papaer Scissors!
const rps = (p1, p2) => {
  if(p1 === p2){
    return 'Draw!';
  } else if((p1 === 'scissors' && p2 === 'paper') || 
            (p1 === 'rock' && p2 === 'scissors') || 
            (p1 === 'paper' && p2 === 'rock')) {
    return 'Player 1 won!'
  }
  return 'Player 2 won!'
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
const find_average = (array) => array.reduce((a,b) => a + b, 0) / array.length;


//A Needle in the Haystack
function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(str => str === 'needle')}`
}

//Grasshopper - Summation
const summation = (num) => (num + 1) * num / 2;

//Remove String Space
function noSpace(x){
  return x.replace(/\s/g,'')
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(integers) {
    integers.sort((a, b) => a-b);
    return integers[0];
  }
}

//Sum of positive
function positiveSum(arr) {
  let sum = 0;
  arr.length > 0 ? arr.forEach(num => num > 0 && (sum = sum + num)) : sum = 0;
  return sum;
}

//Counting sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep).length
}

//Convert number to reversed array of digits
function digitize(n) {
  return n.toString().split('').reverse().map(el => parseInt(el))
}

//WeIrD StRiNg CaSe
function toWeirdCase(string){
  let words = string.toLowerCase().split(' ');
  
  words.forEach(function(word, index) {
    word = word.split('');
    word.forEach(function(letter, index) {
      if(index % 2 === 0){
        letter = letter.toUpperCase();
        word.splice(index,1,letter);
      }      
    })
    word = word.join('');
    words.splice(index,1,word);
  })
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
    numArr.forEach(digit => { product = product * digit })
    persistNum++
    numArr = product.toString().split('')
  } while (product > 9);
  
  return persistNum
}

//Remove First and Last Character
function removeChar(str){
 return str.slice(1,-1)
};

//Does my number look big in this?
function narcissistic(value) {
  let sumCompare = 0;
  let digits = (""+value).split("");
  digits.forEach(number => sumCompare += Math.pow(parseInt(number), digits.length))
  return sumCompare === value ? true : false;
}

//Beginner Series #3 Sum of Numbers
function GetSum( a,b ) {
  let sum = 0;
  let c;
  a > b ? ( c = a, a = b, b = c) : (a = a , b = b)
  for( let i = a ; i <= b ; ++i) {
  sum += i
  }
  
  return sum;
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1];
}  

//Grasshopper - Grade book
function getGrade(s1, s2, s3){
  let average = (s1+s2+s3)/3
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

//Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  var dividends = [];
  numbers.forEach(function(number){ 
    if(number % divisor === 0){
    dividends.push(number)};
    });
  
  return dividends
}

//Even or Odd
function even_or_odd(number) {
  let parity;
  number % 2 === 0 ? parity = 'Even' : parity = 'Odd';
  return parity;
}

//Exes and Ohs
function XO(str) {
  let xs = 0;
  let os = 0;
  let counts = str.toLowerCase().split('');
  counts.forEach(function(letter) { 
   if (letter === 'x'){
     xs++;
   } else if (letter === 'o') {
     os++;
   }})
  return xs === os ? true : false;
}

//Ones and Zeros
// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(''), 2)
// };
//Ones and Zeros refactor
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

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
const repeatStr = (n,s) => s.repeat(n)