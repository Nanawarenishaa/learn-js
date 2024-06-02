console.log("hello");

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
let result = [];
let index=0;
for (let i = 0; i < arr1.length ; ) {
    for(let j = 0 ;j < arr2.length; ) {

        if (arr1[i] < arr2[j]) {
            result[index]=arr1[i];
            i++;
        } else {
            result[index]=arr2[j];
            j++;
        }
        index++;
    }
    }



console.log(result);

