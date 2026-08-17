// +++++++++++++++++++ toLocaleString() +++++++++++++++ 



// let number = 123456789;
// console.log(number.toLocaleString( 'en-IN' ));  // it gives vlaue in INDIA currency that is '

// let number = 123456789;
// console.log(number.toLocaleString()); // Default locale (likely en-IN in your case)

// let number = 64527346586;
// let formattedCurrency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// console.log(formattedCurrency); // "$64,527,346,586.00"

let number = 354735680345;
let inRupees = number.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
console.log(inRupees ); // "₹3,54,73,56,80,345.00"