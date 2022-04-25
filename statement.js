const moment = require('moment')
const BankAccount = require('./bank_account.js')

class Statement {
  constructor(bankAccount) {
    this.bankAccount = bankAccount
  }

  printStatement() {
    console.log("   Date    || Credit || Debit || Balance")
  this.bankAccount.transactions.forEach(transaction => {
    if (transaction.transactionType === "deposit") {
    console.log(`${moment(transaction.date).format("DD/MM/YYYY")} ||   ${transaction.transactionAmount}   || ----- ||   ${transaction.balance}`)
    } else {
      console.log(`${moment(transaction.date).format("DD/MM/YYYY")} ||  ----- ||   ${transaction.transactionAmount}   ||   ${transaction.balance}`)
    }
  })
  }
}
module.exports = Statement
// const account = new BankAccount()
// account.deposit(18)
// account.deposit(22)
// account.withdraw(7)
// // console.log(account)
// const statement = new Statement(account)
// statement.printStatement()