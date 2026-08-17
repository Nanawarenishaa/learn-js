document.addEventListener('DOMContentLoaded',() => {
  
  
  const todoInput = document.getElementById("add-task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.querySelector(".task-list");
  const taskCount = document.getElementById("taskCount");
  
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function updateTaskCount() {
      taskCount.textContent = `Total tasks: ${tasks.length}`;
  }
  
  function renderTask(task) {
  
      const li = document.createElement("li");
  
      li.innerHTML = `
          <span>${task.text}</span>
          <button>Delete</button>
      `;
  
      const span = li.querySelector("span");
      const deleteBtn = li.querySelector("button");
  
     
      if (task.completed) {
          span.classList.add("completed");
      }
  

      li.addEventListener("click", (e) => {
  
          
          if (e.target === deleteBtn) return;
  
          task.completed = !task.completed;
  
          span.classList.toggle("completed");
  
          saveTasks();
      });
  
    
      deleteBtn.addEventListener("click", () => {
  
          tasks = tasks.filter(t => t.id !== task.id);
  
          li.remove();
  
          updateTaskCount();
  
          saveTasks();
      });
  
      taskList.appendChild(li);
  }
  
  
  
  tasks.forEach(task => renderTask(task));
  
  updateTaskCount();
  
  
  addTaskBtn.addEventListener("click", () => {
  
      const taskText = todoInput.value.trim();
  
      if (taskText === "") {
          return;
      }
  
      const newTask = {
          id: Date.now(),
          text: taskText,
          completed: false
      };
  
      tasks.push(newTask);
  
      renderTask(newTask);
  
      updateTaskCount();
  
      saveTasks();
  
      todoInput.value = "";
      
      console.log(tasks)
    });
})