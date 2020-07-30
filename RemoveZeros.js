// function removeZeros(array) {
//   function zero(e) {
//     return String(e) === '0';
//   }
  
//   for (var i = array.length - 1; i --> 0;) {
//     var e = array[i];
//     if (!zero(e)) continue;
//     for (var j = i + 1; j < array.length; j++) {
//       var f = array[j];
//       if (zero(f)) break;
//       array[j - 1] = f;
//       array[j] = e;
//     }
//   }
//   return array;
// }


//refactor
function removeZeros(array) {  
  for (let i = array.length - 1; i >= 0; i--) {
    if (String(array[i]) !== '0') continue;
      for (let j = i + 1; j < array.length; j++) {
        let f = array[j];
        if ( String(array[i]) === '0') break;
        array[j - 1] = f;
        array[j] = array[i];
      }
    
  }
  return array;
}

function removeZeros(array) {
  let zeroes = 0;
   for(let i = 0; i < array.length; i++) {
     if(array[i] === 0 || array[i] === '0') {
      zeroes++;
       eval('var _' + zeroes + " = array[i]");
      for(let j = i+1; j < array.length; j++) {
        array[j-1] = array[j];
      }
       i--;
       array.length = array.length - 1;
      // add 0 to end
     } 
   }
    
    for(let i = 1; i <= zeroes; i++) {
      array[array.length] = eval("_"+i);
    }
    return array;
  }