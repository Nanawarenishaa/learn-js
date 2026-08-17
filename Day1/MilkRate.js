

(function MilkRate( radius , height , pi = 3.14) {
    let volume = pi * (radius * radius) * height;
    let litres = volume / 1000 ;
    let Rate = litres * 40;
   console.log(Rate);
})( 5, 24 );


function MilkRate( radius , height , pi = 3.14) {
    let volume = pi * (radius * radius) * height;
    let litres = volume / 1000 ;
    let Rate = litres * 40;
    return Rate;
}

MilkRate( 5 , 24 );