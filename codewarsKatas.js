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