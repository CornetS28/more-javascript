'use strict'

// fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON !== null ? JSON.parse(todosJSON) : [];
  } catch {
    return [];
  }
};

// Save todo in localStorage
const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//Remove todo from the list
const removeTodo = id => {
  const todoIndex = todos.findIndex(function(todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggle the completed value for a given tdo
const toggleTodo = function(id) {
  const todo = todos.find(function(todo) {
    return todo.id === id;
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

// Get the DOM elements for an indudal todo
const generateTodoDom = todo => {
  const divTodoEl = document.createElement('div');
  const todoCheckbox = document.createElement('input');
  const todoParagraph = document.createElement('span');
  const removeButton = document.createElement('button');

  // set up todo checkbox
  todoCheckbox.setAttribute('type', 'checkbox');
  todoCheckbox.checked = todo.completed;
  divTodoEl.appendChild(todoCheckbox);
  todoCheckbox.addEventListener('change', function() {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // set up the todo text
  todoParagraph.textContent = todo.text;
  divTodoEl.appendChild(todoParagraph);
  todoParagraph.appendChild(removeButton);

  // set up the remove todo
  removeButton.textContent = 'x';
  removeButton.addEventListener('click', function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return divTodoEl;
};

// Render appliation todos based filters

//-- 3 --
const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    const searchTextTodo = todo.text
      .toLowerCase()
      .includes(filters.searchTodo.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextTodo && hideCompletedMatch;
  });

  // -- 4a---
  const incompleteTodos = filteredTodos.filter(todo => {
    return !todo.completed;
  });

  // -- 4c ---
  document.querySelector('#todo-list').innerHTML = '';
  document
    .querySelector('#todo-list')
    .appendChild(generateSummary(incompleteTodos));
  // -- 4b ---

  filteredTodos.forEach(function(todo) {
    const todoElement = generateTodoDom(todo);
    document.querySelector('#todo-list').appendChild(todoElement);
  });
};

// Get the DOM elemnets for the list  summary
const generateSummary = incompleteTodos => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left:`;
  return summary;
};
