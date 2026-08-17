// +++++++++++++++ every() +++++++++++++++++
// weather all elements in the array passes the test implemented by the provided function . it returns the 'true' otherwise 'false'.

// let numbers = [ 8, 2, 6, 4 ];
// let even = numbers.every( num => num % 2 === 0 );
// console.log(even); 

// let temp = [ 98 , 93 , 80 , 58 , 95 ];
// let result = temp.every( ele => ele < 100 );
// console.log(result);

// let tasks =[
//     { title: "task1" , complete: true },
//     { title: "task2" , complete: true },
//     { title: "task3" , complete: true },

// ];
// let completed = tasks.every( ele => ele.complete === true);
// console.log(completed);

let num =[ 80 , 20 , 60 , 40 ];
let numAbove10 = num.some( ele => ele > 30);
let AllnumBelow90 = num.every( ele => ele < 90 );
console.log(numAbove10);
console.log(AllnumBelow90);