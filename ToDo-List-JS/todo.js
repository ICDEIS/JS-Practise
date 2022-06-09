window.addEventListener('DOMContentLoaded', () => {
/* Selectors */
   const todoInput = document.querySelector('#title-in'),
         button = document.querySelector('.btna'),
         todoList = document.querySelector('.list-ul'),
         listOption = document.querySelector('.filter');
   
// Event Listener
   button.addEventListener('click', addTitle);
   todoList.addEventListener('click', deleteItem);
   listOption.addEventListener('click', filterItems);


// Function
   function addTitle(event) {
      event.preventDefault();
      const todoDiv = document.createElement('div');
      window.todoDiv0 = todoDiv
      todoDiv.classList.add('todo');
      if(todoInput.value === '') {
         alert('type something')
      } else {
   // Make li item
         const newTodo = document.createElement('li');
         newTodo.innerText = todoInput.value;
         newTodo.classList.add('todo-item');
         todoDiv.appendChild(newTodo);
   // Make Check Button
         const checkButton = document.createElement('button');
         checkButton.classList.add('check-button');
         checkButton.innerHTML = `<i class="bi bi-check"></i>`;
         todoDiv.appendChild(checkButton);
   // Make Delete Button
         const deleteButton = document.createElement('button');
         deleteButton.classList.add('delete-button');
         deleteButton.innerHTML = `<i class="bi bi-trash2-fill"></i>`;
         todoDiv.appendChild(deleteButton);
   // Append All to todo List
         todoList.appendChild(todoDiv);

   // Clear Input 
      } todoInput.value = ''
   }
   function deleteItem(e) {
      const items = e.target;

      if(items.classList[0] === 'delete-button') {
         const item = items.parentElement;
         item.classList.add('deleting');

         item.addEventListener('transitionend', () => {
            item.remove()
         })
         
         // setTimeout(() => {
            // item.remove()
         // },270);

      }
      if(items.classList[0] === 'check-button') {
         const item = items.parentElement;
         item.classList.toggle('lining') 
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
                  case "marked":
                      if (todo.classList.contains("lining")) {
                          todo.style.display = "flex";
                      } else {
                          todo.style.display = 'none';
  
                      }
                      break;
  
                  case 'unmarked':
                      if (!todo.classList.contains('lining')) {
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



   // function itemFilter(event) {
   //    const todos = todoList.childNodes
   //    item = event.target.value
   //    todos.forEach(todo => {
   //       console.log(todos)
         
   //       switch(item) {
   //          case 'all':
   //             todo.style.display = 'flex';
   //             break;
   //          case 'marked':
   //             if(todo.classList.contains('lining')) {
   //                todo.style.display = 'flex'
   //             } else {
   //                todo.style.display = 'none'
   //             }
   //             break;
   //       }

   //       if(item === 'all') {
   //          todo.style.display = 'flex';
   //       } else if(item === 'marked') {
   //          if(todo.classList.contains('lining')) {
   //             todo.style.display = 'flex';
   //          } else {
   //             todo.style.display = 'none';
   //          }
   //       } else {
   //       }
   //       console.log(todo)
   //    })
   // }
})