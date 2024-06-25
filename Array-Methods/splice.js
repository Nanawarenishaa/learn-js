// ++++++++++++++ splice() ++++++++++


   // 1. ( removing elements from index 1 to 3 but actually 3 indexed element excepted. )
//  let fruits = [ 'apple' , 'banana' , 'orange' , 'grape'];
//  let remove = fruits.splice(1,2);
//  console.log(remove);
//  console.log(fruits);

   // 2. ( Ading elements form index 1  )
//  let fruits = [ 'apple' , 'banana' , 'orange' , 'grape'];
//  fruits.splice(1,0, 'kiwi' , 'mango');
//  console.log(fruits);
 
   // 3. ( Replacing elements )
// let fruits = [ 'apple' , 'banana' , 'orange' , 'grape'];
// fruits.splice( 1 ,2 , 'kiwi' , 'mango');
// console.log(fruits);
  
 // 4. ( Removing all elements from specific index );
 let fruits = [ 'apple' , 'banana' , 'orange' , 'grape'];
 fruits.splice(2);
 console.log(fruits);