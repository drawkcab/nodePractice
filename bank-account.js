var account = {
  balance: 0
};
//deposit
function deposit (account, amount) {
  account.balance += amount;
}


//withdraw
function withdraw (account, amount) {
  account.balance -= amount;
}


//getBalance
function getBalance (account) {
  return account.balance;
}


//Tests
deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 121);

console.log(getBalance(account));
