const todos = [{
 text: 'Walk the dog',
 completed: 'done'
}, {
 text: 'Have some bears',
 completed: 'not yet done'
}, {
 text: 'Call some friends',
 completed: 'not yet done'
}, {
 text: 'meet my cosin',
 completed: 'not yet done'
}, {
 text: 'meet my brothef',
 completed: 'done'
}
];

const findTexts = (todos, query) => {
return todos.filter(function (todo, index) {
  const isTextMatch = todo.text.toLowerCase().includes(query.toLowerCase())
  const isBodyMatch = todo.completed.toLowerCase().includes(query.toLowerCase())
  return isTextMatch || isBodyMatch
 });
}
console.log(findTexts(todos, 'soe'))
//-------------------------------------

const myTodos = [{
 text: 'Walk the dog',
 completed: true
}, {
 text: 'Have some bears',
 completed: false
}, {
 text: 'Call some friends',
 completed: false
}, {
 text: 'meet my cosin',
 completed: false
}, {
 text: 'meet my brothef',
 completed: true
}
];

const getThingsTodo = (todos) => {
 return myTodos.filter(function (todo, index) {
  return !todo.completed
  // or return todo.completed === false
 });
}
console.log(getThingsTodo(todos))