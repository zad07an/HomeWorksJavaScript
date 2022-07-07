/*1. Create an Account class. Account should have: id, name, balance.

It should have setters for name and balance, and getters for all fields.

It should have a method: credit(amount), which should add amount to balance and return the updated balance.

It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”

It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”

It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not, comparing all fields.

It should have toString method.*/

class Account {
  constructor(id, name, balance) {
    this._id = id, 
    this.name = name,
    this.balance = balance
  }
  set setName(newName) {  
    this.name = newName;
  }
  set setBalance(newBalance) {
    this.balance = newBalance;
  }

  get getID() {
    return this._id;
  }
  get getName() {
    return this.name;
  }
  get getBalance() {
    return this.balance;
  }

  toString() {
    return `Hello ${this.name}.\nYour current balance: ${this.balance}AMD. `;
  }

  credit(amount) {
    return `${amount}AMD was transferred to your account.\nYour current balance: ${(amount +=
      this.balance)}AMD.`;
  }

  debit(amount) {
    let result = this.balance - amount;
    if (amount > this.balance) {
      return "Amount exceeded balance.";
    }
    return `${amount}AMD was deducted from your account.\nYour current balace: ${result}AMD.`;
  }

  transferTo(anotherAccount, amount) {
    let result = this.balance - amount;
    if (amount > this.balance) {
      return "Amount exceeded balance.";
    }
    return `Transferred to ${anotherAccount.name}'s account ${amount}AMD.\nYour current balance: ${result}AMD.`;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst instanceof accountSecond) {
      return `${account.name} your account and ${anotherAccount.name}'s account are a same accounts.`;
    }
    return `${account.name} your account and ${anotherAccount.name}'s account are not a same accounts.`;
  }
}

const account = new Account(3108, "Aram", 10000);
const anotherAccount = new Object();
anotherAccount.name = "Steve";


console.log(account.toString());
console.log(account.credit(2000));
console.log(account.debit(500));
console.log(account.transferTo(anotherAccount, 2000));
console.log(Account.identifyAccounts(anotherAccount, Account));
