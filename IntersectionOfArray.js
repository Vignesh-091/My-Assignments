function intersection (arr1,arr2){
let result = [];
for (let index = 0; index < arr1.length; index++) {
    
if (arr2.includes(arr1[index])&& !result.includes(arr1[index])){

    result.push(arr1[index]);


}

    
}

return result 
}

console.log(intersection([1,2,3,4,5,6],[1,2,3,7,6]));