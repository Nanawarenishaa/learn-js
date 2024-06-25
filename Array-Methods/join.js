// ++++++++++ Join() ++++++++++++


   // 1.
// let fruits = [ 'apple' , 'banana' , 'orange' , 'grape'];
// let result = fruits.join();
// console.log(result);
// console.log(fruits);


   // 2.
// let num = [ 1 , 2 , 3 , 4 , 5 ];
// let result = num.join("-")
// console.log(result);

   // 3.
// let words = [ 'hello' , 'world' , 'how' , 'are' , 'you!'];
// let result = words.join(" ");
// console.log(result);

  // 4. 
let user =[
    {name: "Alice"},
    {name: "Bob"},
    {name: "Charlie"},
];
let result= user.map((user) => user.name).join(" , ");
console.log(result);