//++++++++++++++ sort() ++++++++++++++++++

// sorts the ele of an array and returns the sorted array.


    // Ascending order
// let numbers =[ 10 , 36 , 78 , 45 , 5 , 8];
// let sortedByAsce = numbers.sort((a,b) => a-b );
// console.log(sortedByAsce );

// let product = [
//     {name:"laptop" , price:1000},
//     {name:"microwave" , price:1200},
//     {name:"phone" , price:500},
//     {name:"Table" , price:700},
// ];
// let sortedByAsce= product.sort( (a,b) => a.price - b.price );
// console.log(sortedByAsce);


  // descending order
// let numbers =[ 10 , 36 , 78 , 45 , 5 , 8];
// let sortedBydesce = numbers.sort((a,b) => b-a );
// console.log(sortedBydesce );


let product = [
    {name:"laptop" , price:1000},
    {name:"microwave" , price:1200},
    {name:"phone" , price:500},
    {name:"Table" , price:700},
];
let sortedBydesce= product.sort( (a,b) => b.price - a.price );
console.log(sortedBydesce);