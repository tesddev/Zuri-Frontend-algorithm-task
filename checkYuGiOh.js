let checkYuGiOh = (n) => {
  if (isNaN(Number(n))){
    return `invalid parameter: ${JSON.stringify(n)}`
  }
   let getYuGiOh = (number)=>{
   let answer = "";
   if(number % 2===0){
    answer += "yu";
   }
  if(number % 3===0){
    answer = answer ? answer + "-" + "gi" : "gi";
  }
  if(number % 5===0){
    answer = answer ? answer + "-" + "oh" : "oh";
  }
  return answer? answer : number;
 }

let result_arr = [];
let processed_n = parseInt(n);
  for(let number=1; number <= processed_n; number++){
    result_arr.push(getYuGiOh(number))
  }
  return result_arr
}


console.log(checkYuGiOh(10)) 
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))
console.log(checkYuGiOh("30"))
