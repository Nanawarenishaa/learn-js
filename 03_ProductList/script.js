

document.addEventListener("DOMContentLoaded", () =>{
    const productList = document.getElementById("product-list");

    const products = [
        { id:1, name:"Product1", price:"45.33" },
        { id:2, name:"Product2", price:"60.00" },
        { id:3, name:"Product3", price:"25.87" },
    ];

    products.forEach((items,index) => {
        if(products.length){
            const li = document.createElement("li");

            li.innerHTML=`<p>${items.name} - <span>$${items.price}</span></p>
             <button>Add to Cart</button>`
             productList.appendChild(li);
        }


    })

})