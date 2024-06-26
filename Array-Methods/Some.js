//++++++++++++++++++ Some() ++++++++++++++++++++++++

// whether at least one ele passes the the test implemented by the provided the function . it returns 'true' otherwise 'false' . 
// let num = [ 1, 34 , 56 , -7 , 42 ];
// let result= num.some(nums => nums < 0 );
// console.log(result);


// let num = [ 1, 34 , 56 , -7 , 42 ];
// let result= num.some(nums => nums > 0 );
// console.log(result);

let number = [ 1, 3, 7, 9 ,8 , 5];
let result= number.some( num => num % 2 === 0  );
console.log(result);