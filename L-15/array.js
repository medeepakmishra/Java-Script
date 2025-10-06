let arr = [ "deep","dev", "prabhakar", "baman"]
let arr2 = [ "deep2", "dev2", "prabhakar2", "baman2"]


// arr.push(arr2)

//  console.log(arr);
 

// arr3 = arr.concat(arr2);
// console.log(arr3);


const newArr = [ ...arr,...arr2];
console.log(newArr);


const anotherArr = [ 3,5,2,[33,5,2,522,224,[4,5,1,5]]]

const newRealArr = anotherArr.flat(3)
console.log(newRealArr);
