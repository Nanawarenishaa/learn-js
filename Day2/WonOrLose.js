

let Num=[12 ,45, 232,5674,122];
let Max=Num[0];

function WonOrLose( ){
    Num.map(() => {
        Max < Num ? Max = Num : " ";
    })
    Max % 2 === 0 ? console.log("WON"):console.log("LOST");
    };

WonOrLose();