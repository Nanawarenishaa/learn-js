// async function fetchData1() {
//     console.log("fetching data1...")
// }









// function fetchData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//         }, 4000)
//     })
// }
// console.log("fetching data1...")
// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 4000)
//     })
// }


// fetchData1()
// .then((res) =>{
//     console.log( res)
    
//     console.log("fetching data2...")
//     fetchData2()
//     .then((res) =>{
//         console.log( res)
//     })
    
// })








// function getData(dataId){
//    return new Promise((resolve, reject) =>{

//     setTimeout(() =>{
//         console.log("data:", dataId )
//         resolve("success")
//     },2000)
    
// }) 
// }

// async function fetchData() {
//     console.log("fetching data1...")
//     await getData(1)
//     console.log("fetching data2...")
//     await getData(2)
//     console.log("fetching data3...")
//     await getData(3)
// }


// console.log("fetching data1...")

// getData(1).then((res) => {
//     console.log("fetching data2...")
//     return getData(2)
// }).then(() => {
//     console.log("fetching data3...")
//     return getData(3)
// }).then((res) => {
//     console.log(res)
    
// })


//  function getData(dataId){
//    return new Promise((resolve, reject) =>{

//     setTimeout(() =>{
//         console.log("data:", dataId )
//         reject("error occurred")
//     },5000)
    
// }) 
// }

// function getData2(dataId){
//     return new Promise((resolve, reject)=>{
//         reject("error occurred")
//     })
// }

// let result = getData2()
// .then((res) => {
//     console.log("promise resolved:", res)
//     return res;
// })
// .catch((err) => {
//     console.log("promise rejected:", err)
//     return err;
// })