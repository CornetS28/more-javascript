const account = {
 name: 'Samuel Cornet',
 expenses: [],
 income: [],

 addExpenses: function (description, amount) {
  this.expenses.push({
   description: description,
   amount: amount
  })
 },

 addIncome: function (description, amount) {
  this.income.push({
   description: description,
   amount: amount
  })
 },

 getAccountSummary: function () {
  let totalExpenses = 0;
  let totalIncome = 0;
  let accountBalance = 0;

  this.income.forEach(function(incomeAmount) {
   totalIncome += incomeAmount.amount
  });
    
  this.expenses.forEach(function(expense) {
   totalExpenses += expense.amount
  });
  
  accountBalance = totalIncome - totalExpenses
  return `${this.name} has a balance: $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
 },

};


account.addExpenses('Rent', 950)
account.addExpenses('Food', 2)

account.addIncome('Job', 1000)
console.log(account.expenses)
console.log(account.income)
console.log(account.getAccountSummary())
console.log(account.income[0].description)