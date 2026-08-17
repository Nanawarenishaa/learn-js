let arr=[ "Neha", "Rajan", "Aamir", "Bonnie", "Ram" ];
arr.map((index) => {
    let count=0;
    index.split("").map((alpha) => {
     if (alpha=="a" || alpha=="e" || alpha=="i" || alpha=="o" || alpha=="u" || alpha=="A" || alpha=="E" || alpha=="I" ||alpha=="O" || alpha=="U"){
        count++;
     }
    })
    console.log(count);
})