//Selector
const todoInput = document.querySelector(".todo-input");
const todoAmount = document.querySelector(".todo-amount");

const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listner
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event){
    event.preventDefault(); //prevent form from submitting and refreshing

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodoAmount = document.createElement('li');
    newTodoAmount.innerText = "$"+ todoAmount.value;
    newTodoAmount.classList.add('todo-amount');
    todoDiv.appendChild(newTodoAmount);

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" style="position:relative; bottom: 120%;"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //appending
    todoList.appendChild(todoDiv);

    //clear
    todoInput.value ="";
    todoAmount.value ="";
}

//function to check
function deleteCheck(e){
    const item = e.target; //grab item we click on 
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

