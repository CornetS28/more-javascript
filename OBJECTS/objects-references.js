// how to modified elements in an object
const myAccount = {
 name: "Samuel Cornet",
 expenses: 0,
 income: 0
}

let addExpenses = (account, amount) => {
 account.expenses = account.expenses + amount
 //or account.expenses += amount
}

let addIncome = (account, newIncome) => {
 account.income = account.income + newIncome
 //or account.income += newIncome
};

let getAccountSummary = (account) => {
 let balance = account.income - account.expenses
 return `Expenses: ${account.expenses}$ \nIncome: ${account.income}$ \nBalance: ${balance}$ `
};

const resetAccount = (account) => {
 account.expenses = 0,
 account.income = 0
}

addIncome(myAccount, 5540)
addExpenses(myAccount,300)
addExpenses(myAccount, 3.50)
addExpenses(myAccount, 30.00)


let accountOutput = getAccountSummary(myAccount)
console.log(accountOutput)

resetAccount(myAccount)
console.log(myAccount)