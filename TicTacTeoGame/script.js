document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const resetButton = document.getElementById('resetButton');

    let currentPlayer = 'X';
    let gameActive = true;

    let winnerPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const disableBoxes = () => {
        boxes.forEach(box => {
            box.disabled = true;
        });
    };
    const enableBoxes = () => {
        boxes.forEach(box => {
            box.disabled = false;
        });
    };
    const showWinner = () => {
 
     winnerPatterns.forEach(pattern => {
 
         let boxPosOne = boxes[pattern[0]].innerHTML;
         let boxPosTwo = boxes[pattern[1]].innerHTML;
         let boxPosThree = boxes[pattern[2]].innerHTML;
 
         if (
             boxPosOne === boxPosTwo &&
             boxPosTwo === boxPosThree &&
             boxPosOne !== ''
         ) {
             alert(`Player ${boxPosOne} wins!`);
             gameActive = false;
             disableBoxes();
         }
        });
     
 };
    boxes.forEach(box => {

        box.addEventListener('click', () => {
            console.log(`box clicked: ${box.textContent}`);

            if (gameActive){
                box.innerHTML=currentPlayer;
                gameActive=false;
            } else {
                box.innerHTML="O";
                gameActive=true;
            }
            box.disabled=true;
            showWinner();
        })


    });

     
    resetButton.addEventListener('click', () => {
        boxes.forEach(box => {
            box.innerHTML = '';
            enableBoxes();
        });
        gameActive = true;
        currentPlayer = 'X';
    });

});
