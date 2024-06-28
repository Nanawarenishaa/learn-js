// +++++++++++++  toExponential() +++++++++++++

let num1 = 42.4;
console.log(num1.toExponential(2)); // "4.24e+1"  which is equal to '4.24×10^1 =42.4'.
 
let num2 = 1230;
console.log(num2.toExponential(3)); // "1.230e+3" which is equal to '1.230×10^3 =1230'.

let num3 = 0.0567;
console.log(num3.toExponential(4)); // "5.6700e-2" which is equal to '5.6700×10^-2 = 0.0567'.

let num4 = 901000;
console.log(num4.toExponential(3)); // "9.010e+5" which is equal to '9.010×10^5 =90100'.