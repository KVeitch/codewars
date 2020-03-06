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