const Transaction = require('./transaction.js')


class BankAccount {
  
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  deposit(amount) {
    this.balance += amount
    const transaction = new Transaction(amount, 'deposit', this.balance)
    this.transactions.push(transaction)
  }

  withdraw(amount) {
    this.balance -= amount
    this.transactions.push(new Transaction(amount, 'withdrawal', this.balance))  
  }

  
}
module.exports = BankAccount
// statement(bankAccount)
// turn into strings + print

// Can either make a new transaction instance within the withdraw/deposit function
// or can make a transaction class call the withdraw method with the transaction as a parameter?

// account = new BankAccount()
// account.deposit(1000)
// account.deposit(100)
// account.withdraw(200)
// console.log(account.transactions)


// account.statement()
// console.log(moment(Date.now()).format("LLLL"))