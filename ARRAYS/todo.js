const todos = [{
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
  completed: false
 }
];

const deleteTodo = (todos, todoText) => {
 const indexTextToDelete = todos.findIndex(function (todo, index){ 
   return todo.text.toLowerCase() === todoText.toLowerCase()
  });
  if (indexTextToDelete > -1) {
   todos.splice(indexTextToDelete, 1)
  }
}
let textToDelete = deleteTodo(todos, 'Have some bears')
console.log(textToDelete)
console.log('New array printed')
console.log(todos)

// const checkForNotesTitle = (notes, noteTitle) => {
//  const index = notes.findIndex(function (note, index) {
//   return note.title.toLowerCase() === noteTitle.toLowerCase()
//  });
//  return notes[index]

// }

// todo.push('cat')
// todo.splice(2, 1)
// todo.splice(5, 0, 'this is the new item')

// todo.unshift('dolly')

// todo.forEach(function(item, index) {
//  console.log(`${index + 1}. ${item}`)
// })