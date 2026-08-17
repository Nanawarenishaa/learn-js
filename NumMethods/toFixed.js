// ++++++++++++++++ toFixed() +++++++++++++++

let num = [];

for( let i = 15 ; i <= 30 ; i++ ) {
    num.push(i);
    let number = i.toFixed(4);
    console.log(number);
}
console.log(num);