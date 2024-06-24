

let arr=[77,76,68, 72,79];
let sum = 0;
    for(let i = 0 ; i< arr.length; i++){
    sum+=arr[i];
    }
let maxsum=arr.length*100;
let percent=((sum/maxsum)*100).toFixed(2)+"%";
    console.log(percent);