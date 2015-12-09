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

  for (var i = 0; i < accounts.length; i++){
    if (accounts[i].username === username){
      matchedAccount = accounts[i];
    }
  }

  return matchedAccount;
}

//deposit
function deposit (account, amount) {
  if (typeof amount === 'number') {
    account.balance += amount;
  } else {
    console.log('Deposit failed. Please enter a number');
  }

}


//withdraw
function withdraw (account, amount) {
  if (typeof amount === 'number') {
    account.balance -= amount;
  } else {
    console.log('Withdraw failed. Please enter a number');
  }
}


//getBalance
function getBalance (account) {
  return account.balance;
}

function createBalanceGetter (account){
  return function() {
    return account.balance
  }
}


var mattsAccount = createAccount({
  username: 'matt',
  balance: 0
});

var matt = createAccount({
  username: 'Matt',
  balance: 0
});

deposit(matt, 120);
withdraw(matt, "not a num");

var matt2 = getAccount('Matt')
var getMatt2Balance = createBalanceGetter(matt2);

console.log(getMatt2Balance());
