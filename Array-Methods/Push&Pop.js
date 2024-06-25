// let array =[ 67 , 78 ,45 , 23 , 91];
// array.pop();    // delete 91
// console.log(array.pop());
// array.push(13);   // add 13 at last pos
// console.log(array.push(34));   // add 34 at last pos and with console it gives us index of that element - 6
// console.log(array);   //[ 67, 78, 45, 23, 13, 34 ]

// 1.
// let num = [ 1, 2, 3, 4 ];
// num.push( 5 , 6 , 7);
// console.log(num);

// 2.
// let num2=[];
// for(let i = 1; i <=10 ; i++){
//  num2.push(i);
// }
// let copyName=num2;
// copyName.pop();
// console.log(num2);
// console.log(copyName);


// 3.
function Nogenerator(){
    return Math.floor(Math.random()*1000);
}
let randomNo=[];
for (let i = 0; i <= 6 ; i++) {
    randomNo.push(Nogenerator());  
}
console.log(randomNo);

// 4.
let number = [ 1, 3, 14, 56 , 36 ];
while (number.length > 0) {
   let deleted= number.pop();
   console.log(deleted);
}


