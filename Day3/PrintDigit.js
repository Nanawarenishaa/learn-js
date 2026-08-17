(function PrintNum(num){
    let result=[];
    let index=0;
    while(num>0){
       let rem=num%10;
        result[index]=rem;
        index=index+1;
        num=Math.floor(num/10);
    }

    for(let i=result.length-1; i >=0 ; i--){
        console.log(result[i]+" "+ result[i-1]);
        i--;
    }
})(3445);

