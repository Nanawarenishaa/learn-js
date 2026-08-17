let arr=[3, 2, 7, 4, 2, 1];
let TotalPastries=16;

arr.map((index) => {
     let remaining = TotalPastries - index;

     TotalPastries=remaining;
     
     if (TotalPastries >= 0 ){
         console.log("Sorry, we are all out!");
     } else {
         console.log("Enjoy your dessert!");
     }
})
