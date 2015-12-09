var accounts = [];
var account = {
  balance: 0
};



//create account
function createAccount (account) {
  accounts.push(account);
  return account;
}

function getAccount (username) {
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.username === username) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

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


var mattsAccount = createAccount({
  username: 'matt',
  balance: 0
});

deposit(mattsAccount, 100);
console.log(getBalance(mattsAccount));

withdraw(mattsAccount, 11);
console.log(getBalance(mattsAccount));

var existingAccount = getAccount('matt');
console.log(getBalance(mattsAccount));

var lizAccount = createAccount({
  username: 'liz',
  balance: 12
})

console.log(accounts)

var existingLizAccount = getAccount('liz');
console.log(existingLizAccount);
