// ++++++++++ shift() ++++++++++++


// 1. 
// let arr = [ [ 3, 4 ] , [ 5, 6 ] ,[ 1, 2 ] ] ;
// let arr2 = arr.shift();
// console.log(arr);
// console.log(arr2);


// 2.
let result= [] ;
let num = [ 1 , 2 , 3 , 4 , 5 ];
while(num.length > 0 ){
    let deleted = num.shift();
    result.unshift(deleted);
}
console.log(result);
console.log(num);