let weights = [ 40.75, 45.2 , 55.3 , 49.5 , 43.3 , 54.1 , 38.4 , 63.8 , 45.2 , 58.25 ];

(function AverageWeight(sum=0){
    weights.map(( index ) => {
        sum+=index;
        
    })
    let Average=(sum/10).toFixed(6);
    console.log(Average);
})();