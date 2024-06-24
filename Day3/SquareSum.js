function SquareSum(num){
    let result=[];
    let index=0;
    let add=0;
    while(num>0){
       let rem=num%10;
        result[index]=rem;
        index=index+1;
        num=Math.floor(num/10);
    }

    for(let i=result.length-1; i >=0 ; i--){
      let sqaure= result[i] ** 2;
      add = add + sqaure;
      
    }
    console.log(add);
};

SquareSum(12);
SquareSum(13246);