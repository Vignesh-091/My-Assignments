function userProfile(name){
console.log("Hello "+ name);

}
userProfile("vicky");
// Arrow function 
const double = number => number*2
console.log(double(5));
// Anonymous  function 

setTimeout(()=>{
   console.log("This is delayed by 2 seconds ") 
},2000);