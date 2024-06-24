function Armstrong(num){
  let OriginalNum = num;
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
      let sqaure= result[i] ** result.length;
      add = add + sqaure;
      
    }
    
    add == OriginalNum ? console.log(OriginalNum + " is armstrong No ") : console.log(OriginalNum + " is not armstrong number "); 
  
};


Armstrong(153);
Armstrong(13246);