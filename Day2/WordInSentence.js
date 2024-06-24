

(function WordsInSentence(Sentence){
let count = 0;
let Word= false;
Sentence.split("").map((index) => {
    if(index === ' ' ) {
        Word = false;
    } else if(!Word){
        count++;
        Word=true;
    }
})

console.log(count);
})("The quick brown fox jumped over the lazy dog.");