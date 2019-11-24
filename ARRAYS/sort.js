const todos = [
  {
    text: 'Walk the dog',
    completed: 'done',
  },
  {
    text: 'Have some bears',
    completed: 'not yet done',
  },
  {
    text: 'Call some friends',
    completed: 'not yet done',
  },
  {
    text: 'meet my cosin',
    completed: 'not yet done',
  },
  {
    text: 'meet my brothef',
    completed: 'done',
  },
];
const sortTodos = todos => {
  todos.sort(function(a, b) {
    if (a.text.toLowerCase() < b.text.toLowerCase()) {
      return -1;
    } else if (b.text.toLowerCase() > a.text.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortTodos(todos);
console.log(todos);
//---------------------------------------------------
console.log('MORE SORTING WITH BOOLEAN DATA');
const myTodos = [
  {
    text: 'Walk the dog',
    completed: true,
  },
  {
    text: 'Have some bears',
    completed: false,
  },
  {
    text: 'Call some friends',
    completed: false,
  },
  {
    text: 'meet my cosin',
    completed: false,
  },
  {
    text: 'meet my brothef',
    completed: true,
  },
];

const sortMyTodos = myTodos => {
  myTodos.sort(function(a, b) {
    if (a.completed && !b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortMyTodos(myTodos);
console.log(myTodos);
