console.log("Starting password manager");

var storage = require('node-persist');
storage.initSync();


function createAccount (account) {
  if(typeof accounts === 'undefined'){
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount (accountName) {
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });

  return matchedAccount;

}

// createAccount({
//   name: 'Facebook',
//   username: 'yolo@maxswag.com',
//   password: 'Password123!'
// })

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
