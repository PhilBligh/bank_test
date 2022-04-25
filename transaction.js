class Transaction {
  constructor(amount, type, balance) {
    this.date = Date.now()
    this.transactionType = type
    this.transactionAmount = amount
    this.balance = balance
    }
}

module.exports = Transaction