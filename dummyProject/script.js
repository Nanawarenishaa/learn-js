document.addEventListener("DOMContentLoaded", () => {

    const expenseTitle = document.getElementById("expenseTitle")

    const expensePrice = document.getElementById("expensePrice")

    const addExpenseBtn = document.getElementById("addExpenseBtn")

    const expenseList = document.getElementById("expenseList")

    const expenses =  JSON.parse(localStorage.getItem("expenses")) || [];

    addExpenseBtn.addEventListener("click", () =>{
        console.log("clicked")
        const inputTitle = expenseTitle.value.trim();
    
        const inputPrice = expensePrice.value.trim()

       let newExpense = {
            id : Date.now(),
            title : inputTitle,
            price : inputPrice
        }

        expenses.push(newExpense)

        rendorExpense(newExpense)
        
        saveExpense();
        
        console.log(expenses)

         
    })

     
 expenses.forEach( exp => rendorExpense(exp))

    function rendorExpense(expense) {
        const li = document.createElement("li") 


        li.innerHTML = `
                    <span>${expense.title} - $${expense.price} </span>
                    <button>delete</button>
        `
        expenseList.appendChild(li)



    }

    function saveExpense() {

        localStorage.setItem("expenses" , JSON.stringify(expenses) )

    }

    
       
  

})