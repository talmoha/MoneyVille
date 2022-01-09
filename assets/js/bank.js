//Selector
const bankInput = document.querySelector(".bank-input");
const bankAmount = document.querySelector(".bank-amount");
const middleAmount = document.querySelector(".middleAmount");
const mainAmount = document.querySelector(".mainAmount");

const bankButton = document.querySelector(".bank-button");
const bankButton2 = document.querySelector(".bank-button2");
const bankList = document.querySelector(".bank-list");
const bankImage = document.querySelector(".bankImage");

//event listner
bankButton.addEventListener('click', addBank);
bankButton2.addEventListener('click', addBank2);

bankImage.addEventListener('click', updateBank);

bankList.addEventListener('click', deleteCheck);

//update balance from main page
function updateBank(event){
    event.preventDefault();

    middleAmount.value = parseInt(mainAmount.value);
}


//add to balance
function addBank(event){
    event.preventDefault(); //prevent form from submitting and refreshing

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodoAmount = document.createElement('li');
    newTodoAmount.innerText = "$"+ bankAmount.value;
    newTodoAmount.classList.add('todo-amount');
    todoDiv.appendChild(newTodoAmount);
    middleAmount.value = parseInt(middleAmount.value) + parseInt(bankAmount.value);
    mainAmount.value = parseInt(mainAmount.value) + parseInt(bankAmount.value);

    const newTodo = document.createElement('li');
    newTodo.innerText = bankInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    

    const newTodo2 = document.createElement('li');
    newTodo2.innerText = "2022/01/09";
    newTodo2.classList.add('todo-item2');
    todoDiv.appendChild(newTodo2);

    //appending
    bankList.appendChild(todoDiv);

    //clear
    bankInput.value ="";
    bankAmount.value ="";
}


const bankInput2 = document.querySelector(".bank-input2");
const bankAmount2 = document.querySelector(".bank-amount2");

function addBank2(event){
    event.preventDefault(); //prevent form from submitting and refreshing

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodoAmount = document.createElement('li');
    newTodoAmount.innerText = "-$"+ bankAmount2.value;
    newTodoAmount.classList.add('todo-amount2');
    todoDiv.appendChild(newTodoAmount);

    const newTodo = document.createElement('li');
    newTodo.innerText = bankInput2.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    

    const newTodo2 = document.createElement('li');
    newTodo2.innerText = "2022/01/09";
    newTodo2.classList.add('todo-item2');
    todoDiv.appendChild(newTodo2);

    //appending
    bankList.appendChild(todoDiv);

    //clear
    bankInput2.value ="";
    bankAmount2.value ="";
}
