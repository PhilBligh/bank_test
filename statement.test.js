const BankAccount = require("./bank_account.js")
// const Transaction = require("./transaction.js")
const Statement = require("./statement.js")
global.console.log = jest.fn()
describe ("Statement", () => {
  it ("prints out a bank statement", () => {
    const account = new BankAccount();
    account.deposit(10)
    account.withdraw(6)
    const statement = new Statement(account)
    statement.printStatement()
    expect(console.log).toHaveBeenCalledWith("25/04/2022 ||   10   || ----- ||   10")
    expect(console.log).toHaveBeenCalledWith("25/04/2022 ||  ----- ||   6   ||   4")

  })
})