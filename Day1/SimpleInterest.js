
(function SimpleInterest( Principal , Rate , Time ){
    console.log( `Simple Interest is:${ (( Principal*Rate*Time)/100 ).toFixed(6) }`);
})( 1500 , 1.4 , 3 );