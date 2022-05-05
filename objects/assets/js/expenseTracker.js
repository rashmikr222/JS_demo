let myAccount = {
    name:"Rashmi.K.R",
    expenses:0,
    income:0
}

let addIncome = function(account,income){
account.income = account.income + income;
}
let addExpense = function(account,expenses){
    account.expenses = account.expenses + expenses;
}
let resetAccount = function (account){
    account.income = 0
    account.expenses = 0
}
let accountSummary = function(account){
    let balance = account.income - account.expenses;
    console.log(`Account for ${account.name} has ${balance}, ${account.income} in income,${account.expenses} in expenses.`);
}
addIncome(myAccount,14000);
addExpense(myAccount,10000);
accountSummary(myAccount);
resetAccount(myAccount);
accountSummary(myAccount);

// addIncome 

// function resetAccount
// getAccountSummary
// Account for Rashmi has $900, $1000 in income,$100 in expenses.
// addIncome
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary
// ***********************************************
