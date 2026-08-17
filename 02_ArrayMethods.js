let arr = [10,20,30,40,50];
// console.log(arr);

arr.push(60);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.unshift(5);
// console.log(arr);

arr.shift();
// console.log(arr);

let arr1=[10,20,30,20,40]
// console.log(arr1.includes(20));

// console.log(arr1.includes(20,2));

// console.log(arr1.indexOf(20));

// console.log(arr1.lastIndexOf(20));

let students = [
    {id:1,name:'Nisha'},
    {id:2,name:'Shreya'},
    {id:3,name:'Riya'}
]

// console.log(students);

// find()
let student = students.find(s => s.id == 2);
// console.log(student);

// indexOf()
let result = arr.findIndex( n => n > 20);
// console.log(result);

// forEach
arr.forEach(n=>{
    // console.log(n);
    
})

// map()
 let double= arr.map(n => n * 2);
// console.log(double);

let num = [1,5,2,8,9];

// filter()
let evenNum = num.filter(n=> n%2 === 0);
// console.log(evenNum);

// console.log(num.find(n => n > 4));
// console.log(num.filter(n => n > 4));

let totalNum = num.reduce((n,total) => {
       n += total;
       return n;
    }, 0);
    // console.log(totalNum);

let cart = [100, 200, 300];

let totalCart = cart.reduce((total, n) => total + n, 0);
// console.log(totalCart);




    // some()
   let email =[
        'nisha1@gmail.com',
        'shreya1@gmail.com',
        'riya1@gmail.com'];

        let isEmailPresent = email.some(e => e === 'nisha1@gmail.com');
        // console.log(isEmailPresent);

// every()

let marks = [10,20,30,40,50];
let isAllPass = marks.every(m => m >= 35);
let isAllPass1 = marks.every(m => m >= 10);
// console.log(isAllPass);
// console.log(isAllPass1);

// splice()
let fruits = ['apple','banana','mango','grapes'];
fruits.splice(1,2);
// console.log(fruits);
fruits.splice(1,0,'banana','mango');
// console.log(fruits);
fruits.splice(1,0,'kiwi');
// console.log(fruits);

// sort()
let numbers = [10,5,20,15];

numbers.sort((a,b) => a-b);
console.log(numbers);
numbers.sort((a,b) => b-a);
console.log(numbers);

























