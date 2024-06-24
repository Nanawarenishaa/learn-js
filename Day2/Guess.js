let arr=[3, 23, 19, 14, 12];
let BirthDay=14;

for(let i=0 ; i < arr.length ; i++){
    if(arr[i] == BirthDay ){
        console.log("correct Guess!") ;
        break;
    } else {
        console.log("Incorrect correct Guess!") ;
    }
}