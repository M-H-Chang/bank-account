// -----Utility Logic------


// -----Business Logic-----
function BankAccount() {
  this.accounts = {};
  this.currentId = 0;
  this.currentBalance = 0;
}

BankAccount.prototype.depositAmount = function (deposit) {
  this.initialDeposit + deposit
  return this.currentBalance;
}

BankAccount.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

BankAccount.prototype.addAccount = function (account) {
  account.id = this.assignId();
  this.accounts[account.id] = account
}

BankAccount.prototype.findAccount = function (id) {
  if (this.accounts[id] != undefined) {
    return this.accounts[id];
  }
  return false;
}

// BankAccount.prototype.currentBalance = function () {
//   return this.currentBalance + openingDeposit;
// }

function Account(fullName, initialDeposit) {
  this.fullName = fullName;
  this.initialDeposit = initialDeposit;
  // this.id;
}

Account.prototype.fullName = function () {
  return `${this.fullName}`;
}

// -----User Interface Logic-----
let accountLedger = new BankAccount();
$(document).ready(function () {
  $("#registerForm").submit(function (event) {
    event.preventDefault();
    const inputtedFullName = $("#name").val();
    const openingDeposit = parseInt($("#initialDeposit").val());
    let newAccount = new Account(inputtedFullName, openingDeposit);
    console.log(newAccount.fullName)
    // returns the value of the fullName property of that specific account object
    console.log(newAccount.ssn)
    // undefined
    newAccount.ssn = 3
    console.log(newAccount.ssn)
    // 3
    accountLedger.addAccount(newAccount);

    // // we have the new deposit amount
    // const newDepositAmount = 10;
    // newAccount.initialDeposit += newDepositAmount;

    const additionalDeposit = parseInt($("#deposit").val());


    $("#currentBalance").text(openingDeposit);
    // $("#currentBalance").text(additionalDeposit + 50);
  })
})


// const brooke = {
//   favColor: "blue",
//   favFood: "beans"
// }

// console.log(brooke)
// //
// // {
// //   favColor: "blue",
// //     favFood: "beans"
// // }

// brooke.pets = {
//   firstPet: {
//     animal: "cat",
//     colors: ["orange", "white"],
//     temperament: "sweetie pie"
//   }
// }
// console.log(brooke)
// {
//   favColor: "blue",
//     favFood: "beans",
//       pets: {
//     firstPet: {
//       animal: "cat",
//         colors: ["orange", "white"],
//           temperament: "sweetie pie"
//     }
//   }
// }
// brooke.pets = ["cat", "bird"];

// console.log(brooke)
// {
//   favColor: "blue",
//     favFood: "beans",
//       pets: ["cat", "bird"]
// }

