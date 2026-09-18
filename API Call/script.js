const API = "https://catfact.ninja/facts";

const catFact = document.getElementById("cat-fact");

const btn = document.getElementById("new-fact");

let getData = async () =>{
    console.log("Fetching data...")
    let response = await fetch(API)
    let data = await response.json()
    console.log(response.status)
    console.log(data)

    catFact.textContent = data.data[1].fact;
    
}

btn.addEventListener("click", getData);
