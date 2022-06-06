window.addEventListener('DOMContentLoaded', () => {
/* Selectors */
   const todoInput = document.querySelector('#title-in'),
         button = document.querySelector('.btna'),
         listUl = document.querySelector('.list-ul');
   
// Event Listener
   button.addEventListener('click', addTitle);
   listUl.addEventListener('click', deleteItem)

// Function
   function addTitle(event) {
      event.preventDefault();
      const todoDiv = document.createElement('div');
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
         listUl.appendChild(todoDiv);

   // Clear Input 
      } todoInput.value = ''
   }
   function deleteItem(e) {
      const items = e.target;
      const item = items.parentElement;

      if(items.classList[0] === 'delete-button') {
         item.remove()
      }
      if(items.classList[0] = 'check-button') {
         item.classList.add('line-through')
      }
   };
   


})