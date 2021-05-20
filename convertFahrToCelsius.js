function convertFahrToCelsius(F){
  C = (F - 32) * 5/9;
  var final = C.toFixed(4) ;
  if (Array.isArray (F) ){
    return `${JSON.stringify(F)} is not a valid number but a/an array.`
  }
  else if (isNaN(final)){
         return `${JSON.stringify(F)} is not a valid number but a/an ${typeof F}.`
  } 
  else {
  return final;
}}

console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))
console.log(typeof([1,2,3]))