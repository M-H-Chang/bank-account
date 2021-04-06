// -----Utility Logic------

// function States(city, landmarks, timeOfYear) {
//   this.city = city;
//   this.landmarks = landmarks;
//   this.timeOfYear = timeOfYear;
// }


// let Washington = new States("Seattle", ["The Needle" + ', ' + "Queen Anne"], "1995")
// let Oregon = new States("Portland", ["Voodoo Donuts" + ', ' + "Pittock Mansion"], "2000")
// let Hawaii = new States("Oahu", ["Waikiki" + ', ' + "Waimanalo Beach"], "2019")
// let California = new States("San Diego", ["Balboa Park" + ', ' + "Seaworld"], "2017")
// let Illinois = new States("Chicago", ["The Bean" + ', ' + "Museum of Art"], "2015");
// let Colorado = new States("Boulder", ["Mesa Verde National Park" + ', ' + "Ute Tribe Park"], "2022");


// -----Business Logic-----
function BankAccount() {
  this.accounts = {};
  this.currentId = 0;
  this.currentBalance = 0;
}

BankAccount.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

BankAccount.prototype.addAccount = function (account) {
  account.id = this.assignId();
  this.accounts[account.id] = account
}

// BankAccount.prototype.currentBalance = function () {
//   return this.currentBalance + openingDeposit;
// }

function Account(fullName, initialDeposit) {
  this.fullName = fullName;
  this.initialDeposit = initialDeposit;
}

Account.prototype.fullName = function () {
  return `${this.fullName}`;
}
// -----User Interface Logic-----
// let accountLedger = new BankAccount();
$(document).ready(function () {
  $("#registerForm").submit(function (event) {
    event.preventDefault();
    // const inputtedFullName = $("#name").val();
    // let newAccount = new Account(openingDeposit);
    // accountLedger.addAccount(newAccount);
    const openingDeposit = parseInt($("#initialDeposit").val())
    $("#currentBalance").text(openingDeposit);
  })
})