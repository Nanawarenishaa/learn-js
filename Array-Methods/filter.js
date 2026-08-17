// +++++++++++++++ filter() ++++++++++++++++

// Creates the new array with all ele that pass the test implemented by the provide function .


// let num = [ 1 , 2 , 3 , 4 , 5 ];
// let evenNo = num.filter( number => number % 2 === 0 );
//  console.log(evenNo);


 let product = [
    {name:"laptop" , price:1000},
    {name:"microwave" , price:1200},
    {name:"phone" , price:500},
    {name:"Table" , price:700},
];
let expensive= product.filter( ele => ele.price > 800);
console.log(expensive);
