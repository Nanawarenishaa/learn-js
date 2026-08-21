

document.addEventListener("DOMContentLoaded", () =>{


    const expenseTitle = document.getElementById("expenseTitle");

    const expensePrice = document.getElementById("expensePrice");

    const addExpenseBtn = document.getElementById("addExpenseBtn");

    const expenseList = document.getElementById("expenseList");

    const totalExpense = document.getElementById("totalExpense");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    let sum = 0;


    function displayExpenses(expense){
        

       const li = document.createElement("li")

       li.innerHTML = `
          <span> ${expense.title} - $${expense.price} </span>
            <button>Delete</button>
       `
        expenseList.appendChild(li)

        const deleteBtn = li.querySelector("button");
    
        deleteBtn.addEventListener("click", () => {
    
            li.remove();
           expenses = expenses.filter( e => e.id !== expense.id)
            saveExpenses()
        })

        sum += Number(expense.price);

        totalExpense.textContent=`$${sum.toFixed(2)}`





    }


    addExpenseBtn.addEventListener("click", () => {
       const expenseTitleValue = expenseTitle.value.trim();

       const expensePriceValue = expensePrice.value.trim();

     const newExpense = { 
        id : Date.now(),
        title :expenseTitleValue,
        price : expensePriceValue
    }

       expenses.push(newExpense);

        displayExpenses(newExpense)

        saveExpenses();

        console.log(expenses)

        expenseTitle.value="";
        expensePrice.value="";

    })

    expenses.forEach(expense => displayExpenses(expense));

    function saveExpenses(){
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

})