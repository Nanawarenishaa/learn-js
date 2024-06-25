let array =[ 67 , 78 ,45 , 23 , 91];
array.pop();    // delete 91
console.log(array.pop());
array.push(13);   // add 13 at last pos
console.log(array.push(34));   // add 34 at last pos and with console it gives us index of that element - 6
console.log(array);   //[ 67, 78, 45, 23, 13, 34 ]

// 1.
let num = [ 1, 2, 3, 4 ];
num.push( 5 , 6 , 7);
console.log(num);