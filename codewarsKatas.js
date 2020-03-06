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
