'use strict'

let todos = getSavedTodos(); 
//-- 1 --
const filters = {
  searchTodo: '',
  hideCompleted: false // step 2
}

renderTodos(todos, filters)

// //-- 3 --
// const renderTodos = function (todos, filters) {
//   let filteredTodos = todos.filter(function (todo) {
//     return todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase())
//   });

//   // step 4
//   filteredTodos = filteredTodos.filter(function (todo) {
//     return !filters.hideCompleted || !todo.completed
//     // return filters.hideCompleted ? !todo.completed : true
//     // or
//     // if (filters.hideCompleted) {
//     //   return !todo.completed
//     // } else {
//     //  return true
//     // }
//   })

//   // -- 4a---
//   const incompleteTodos = filteredTodos.filter((todo) => {
//     return !todo.completed
//   });
//   // -- 4c ---
//   document.querySelector('#todo-list').innerHTML = '';
   
//   // -- 4b ---
//   const summary = document.createElement('h2');
//   summary.textContent = `You have ${incompleteTodos.length} todos left:`
//   document.querySelector('#todo-list').appendChild(summary)

//   filteredTodos.forEach(function (todo) {
//     const paragraph = document.createElement('p');
//     paragraph.innerHTML = todo.text
//     document.querySelector('#todo-list').appendChild(paragraph)
//   })
// }
// -- 4d ---




// document.querySelector('#remove-todo').addEventListener('click', (e) => {
//  e.target.textContent = 'Removed successfully!'
//  document.querySelectorAll('.todo').forEach(function (note) {
//   note.remove()
//  })
// });

//-- 2-- (console.log(e.target.value))
document.querySelector("#search-text").addEventListener('input', (e) => {
  filters.searchTodo = e.target.value
  // -- 5 ---
  renderTodos(todos, filters)
});
// console.log(incompleteTodos)

//form to add todo
// 1. select the id and add event listen
document.querySelector("#todo-form").addEventListener('submit', (e) => {
  e.preventDefault();
  // 2. push the entered value to the todos array (of objects)
  todos.push({
    id: uuidv4(),
    text: e.target.elements.addTodo.value,
    completed: false
  });

  saveTodos(todos)
  // 3. render the enterd value to the dom
  renderTodos(todos, filters)
  // 4. clear the form input
  e.target.elements.addTodo.value = '';
});


//checkbox
// step 1
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  // step 3
 filters.hideCompleted = e.target.checked;
 renderTodos(todos, filters)
})