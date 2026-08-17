// ++++++++++++++++ Find() +++++++++++++++

 // returns the value of the first ele that satisfies provided fuction
// let arr = [ 1, 2, 3, 4 ];
// let found = arr.find((ele) => ele < 4);
// console.log(found);

// let arr = [ 1, 2, 3, 4 ];
// let found = arr.find((ele) => ele == 4);
// console.log(found);

// case sensitive
// let fruits = [ 'apple' , 'banana' , 'orange' , 'grape' , 'Avocado'
// ];
// let found = fruits.find( ele => ele.startsWith("A"));
// console.log(found);


// let fruits = [ 'apple' , 'banana' , 'orange' , 'grape' , 'Avocado'
// ];
// let found = fruits.find( ele => ele.startsWith("o"));
// console.log(found);

let product = [
    {name:"laptop" , price:1000},
    {name:"microwave" , price:1200},
    {name:"phone" , price:500},
    {name:"Table" , price:700},
];
let expensive= product.find( ele => ele.price > 700);
console.log(expensive);


