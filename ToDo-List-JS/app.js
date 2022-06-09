const todoInput = document.querySelector('.todo-input'); // select the input
const todoButton = document.querySelector('.todo-button'); // select button
const todoList = document.querySelector('.todo-list'); // select <UL>
const filterBtn = document.querySelector('.filter');

// EVENT LISTENERS

document.addEventListener('DOMContentLoaded', getLocalStorageItems());


todoButton.addEventListener('click', addTodo); // for the submit button to add an item to the todo list

todoList.addEventListener('click', deleteItem); // for the delete button to delete the item

filterBtn.addEventListener('click', filterItems); //filters items 

// FUNCTIONS

function addTodo(e) {
    e.preventDefault(); // prevents the page from submitting - keeps the value

    // create the TODO div that will wrap around the li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create the LI element that will contain our TODO assignment
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    localStorageSave(todoInput.value); // gets the value of the input that we got up in the beginning

    // added the <LI> element inside a todo <DIV>
    todoDiv.appendChild(newTodo);

    // the DIV is now floating in air, we can't see it.. we will appendChild it later into todoList

    // CHECK MARK BUTTON

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // DELETE BUTTON

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    // APPEND TODO <DIV> to the todo LIST
    todoList.appendChild(todoDiv);

    // CLEAR THE VALUE FROM THE INPUT

    todoInput.value = ''; // sets the input value to an empty string

}

function deleteItem(e) {
    const item = e.target;

    // delete functionality 

    if (item.classList.contains('delete-btn')) {
        item.parentElement.classList.add('disappear'); // adds class ''dissapear''
        removeToDos(item.parentElement);
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove(); //waits till transition ends, then removes element
        });
    }

    // checkmark color upon completion

    if (item.classList.contains('complete-btn')) {
        item.parentElement.classList.toggle('completed'); // changes the opacity and line through
        item.classList.toggle('completedBtnBg'); // changes the background color of the checkmark button upon completion
    }
}

function filterItems(e) {
    const todos = todoList.childNodes;

    console.log(todos);

    todos.forEach((todo) => {

        //check for undefined values and skips then and only apply the switch statement on nodes with properties 
        if (todo.classList !== undefined) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = 'none';

                    }
                    break;

                case 'unfinished':
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';

                    }
                    break;
                default:
                    break;
            }
        }
        return;
    });
}