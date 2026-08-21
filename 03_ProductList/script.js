document.addEventListener("DOMContentLoaded", () =>{
    const productList = document.getElementById("product-list");

    const cartProducts = document.getElementById("cartProducts");

    const totalPrice = document.getElementById("totalPrice");

    const emptyCartMsg = document.getElementById("emptyCartMsg");

    const checkedBtn = document.getElementById("checkedBtn");
  
    const cartTotal = document.getElementById("cart-total");
    
    const products = [
        { id:1, name:"Product1", price:"45.33" },
        { id:2, name:"Product2", price:"60.00" },
        { id:3, name:"Product3", price:"25.87" },
    ];

    let sum=0;
    const cart=[];

    products.forEach((items,index) => {

        const li = document.createElement("li");
  
        if(products.length){
            
            li.innerHTML=`<p>${items.name} - <span>$${items.price}</span></p>
            <button>Add to Cart</button>`
            productList.appendChild(li);
        }
        
        
        const addToCartBtn = li.querySelector("button");
        
        addToCartBtn.addEventListener("click",() =>{
            const div = document.createElement("div");
            
            div.innerHTML=`
            <p>${items.name} - <span>$${items.price}</span></p>
            `;

            sum += Number(items.price);

             cart.push(items);
             cartProducts.appendChild(div);
             
             totalPrice.textContent=`$${sum.toFixed(2)}`;
             
             cartProducts.classList.remove("hidden");
             cartTotal.classList.remove("hidden");
             emptyCartMsg.classList.add("hidden");
             
             div.addEventListener("click", () => {
                    div.remove();

                    sum -= Number(items.price);

                    const index = cart.indexOf(items);

                     if (index !== -1) {
                        cart.splice(index, 1);
                    }

                    totalPrice.textContent = `$${sum.toFixed(2)}`;
                });
            });
        
    });
    checkedBtn.addEventListener("click",() =>{
        totalPrice.textContent=`$0.00`;
        cart.length= 0;
        sum = 0;
        cartProducts.innerHTML="";
        alert("carts checked successfully..")
    })


})