const Numbers = [2,4,5,2,1,2];
let count = 0;
const k = 2;
for (let index = 0; index < Numbers.length; index++) {
   if (Numbers[index]===k){
count++;

   }
    
}
console.log(`The Number of Repeated times for ${k} is ${count}`)