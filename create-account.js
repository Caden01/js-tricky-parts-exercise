function createAccount(pin, amount = 0) {
  return {
    checkBalance(input) {
      if (input !== pin) {
        return "Invalid PIN."
      }

      return `$${amount}`
    },
    deposit(input, num) {
      if (input !== pin) {
        return "Invalid PIN."
      }

      amount += num

      return `Succesfully deposited $${num}. Current balance: $${amount}.`
    },
    withdraw(input, num) {
      if (input !== pin) {
        return "Invalid PIN."
      }

      if (num > amount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled."
      }

      amount -= num

      return `Succesfully withdrew $${num}. Current balance: $${amount}.`
    },
    changePin(currentPin, newPin) {
      if (currentPin !== pin) {
        return "Invalid PIN."
      }

      pin = newPin

      return "PIN successfully changed!"
    }
  }
}

module.exports = { createAccount };
