function Armstrong(num){
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
      let orignalNo=result[i];
      let sqaure= result[i] ** result.length;
      add = add + sqaure;
      
    }
    
    num == orignalNo ? console.log(num+ " is armstrong No ") :console.log(num+ " is not armstrong number "); 
    console.log(add);
};


Armstrong(153);
Armstrong(13246);