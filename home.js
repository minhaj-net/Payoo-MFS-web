document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault;
    const bank = document.getElementById("bank-name").value;
    const bankAcount = document.getElementById("acount-number").value;
    const amount = parseInt(document.getElementById("amount-number").value);
    const pin = parseInt(document.getElementById("pin-number").value);
    const validPin = 1234;
    // console.log(bank, bankAcount, pin, amount);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (bankAcount.length < 11) {
      alert("Please provide valid acount number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide your valid pin ");
      return;
    }
    const totalAvailableBalance = availableBalance + amount;
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

//cashout submit features
document
  .getElementById("cashout-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault;
    let cashoutAcountNumber = parseInt(
      document.getElementById("cashout-acount-number").value
    );
    const cashoutAmountNumber = parseInt(
      document.getElementById("cashout-amount-number").value
    );
    // const pinNumber = parseInt(
    // document.getElementById("cashout-pin-number").value
    // );
    // console.log(pinNumber);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const cashoutTotalAvailableBalane = availableBalance - cashoutAmountNumber;

    document.getElementById("available-balance").innerText =
      cashoutTotalAvailableBalane;
  });

// transfer money features
function getNumberValu(id) {
  const inputField = document.getElementById(id);
  const inputFieldValu = document.getElementById(id).value;
  const inputFieldValuNumber = parseInt(inputFieldValu);
  return inputFieldValuNumber;
}

document
  .getElementById("transfer-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault;
    const transferAcount = getNumberValu("transfer-acount-number");
    // const transferPin = getNumberValu("transfer-pin-number");
    const transferAmount = getNumberValu("transfer-amount-number");
    // const validPinNumber = 1111;

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // if (transferPin !== validPinNumber) {
    //   alert("Invalid Cradential");
    //   return;
    // }

    const newTotalAvailableBalance = availableBalance - transferAmount;

    document.getElementById("available-balance").innerText =
      newTotalAvailableBalance;
  });

//toggle features

// document.getElementById("transfer-btn").addEventListener("click", function () {
//   document.getElementById("add-money-section").style.display = "none";
//   document.getElementById("cashout-section").style.display = "none";
//   document.getElementById("transfer-section").style.display = "block";
// });
//toggle features

// document.getElementById("wallet-btn").addEventListener("click", function () {
//   document.getElementById("cashout-section").style.display = "none";
//   document.getElementById("add-money-section").style.display = "block";
// });

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   document.getElementById("add-money-section").style.display = "none";
//   document.getElementById("cashout-section").style.display = "block";
// });

// shered function for toggle
function handlertoggle(id) {
  const froms = document.getElementsByClassName("from");
  for (const from of froms) {
    from.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function handleButtonToggle(id) {
  const fromsBtn = document.getElementsByClassName("froms");

  for (const btn of fromsBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById(id).classList.remove("border-gray-200");
}

// all toggle here
// 1.add money toogle
document.getElementById("wallet-btn").addEventListener("click", function (e) {
  e.preventDefault;
  // const froms = document.getElementsByClassName("from");
  // for (const from of froms) {
  //   from.style.display = "none";
  // }
  // document.getElementById("add-money-section").style.display = "block";
  handlertoggle("add-money-section");
  const fromsBtn = document.getElementsByClassName("froms");

  for (const btn of fromsBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document
    .getElementById("cashout-btn-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document
    .getElementById("cashout-btn-btn")
    .classList.remove("border-gray-200");
});
// 2.cashout toggle here
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  e.preventDefault;
  // const froms = document.getElementsByClassName("from");
  // for (const from of froms) {
  //   from.style.display = "none";
  // }
  // document.getElementById("cashout-section").style.display = "block";
  handlertoggle("cashout-section");
});
// 3.tranfer money toggle here

document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault;
  // const froms = document.getElementsByClassName("from");
  // for (const from of froms) {
  //   from.style.display = "none";
  // }
  // document.getElementById("transfer-section").style.display = "block";
  handlertoggle("transfer-section");
  handleButtonToggle("transfer-btn");
});
// 4.get bonus toggle here
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault;
  // const froms = document.getElementsByClassName("from");
  // for (const from of froms) {
  //   from.style.display = "none";
  // }
  // document.getElementById("bonus-section").style.display = "block";
  handlertoggle("bonus-section");
});
//5.pay bill toggle here
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault;
  // const froms = document.getElementsByClassName("from");
  // for (const from of froms) {
  //   from.style.display = "none";
  // }
  // document.getElementById("pay-money-section").style.display = "block";
  handlertoggle("pay-money-section");
});

// section button selected background and border

document.getElementById("wallet-btn").addEventListener("click", function (e) {
  e.preventDefault;
  const fromsBtn = document.getElementsByClassName("froms");

  for (const btn of fromsBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document
    .getElementById("wallet-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById("wallet-btn").classList.remove("border-gray-200");
});

//2.cashout  button selected background and border
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  e.preventDefault;
  const fromsBtn = document.getElementsByClassName("froms");

  for (const btn of fromsBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document
    .getElementById("cashout-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById("cashout-btn").classList.remove("border-gray-200");
});

//3.get bonus   button selected background and border
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault;
  const fromsBtn = document.getElementsByClassName("froms");

  for (const btn of fromsBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document
    .getElementById("bonus-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById("bonus-btn").classList.remove("border-gray-200");
});
//4.pay bill   button selected background and border
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault;
  const fromsBtn = document.getElementsByClassName("froms");

  for (const btn of fromsBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document
    .getElementById("pay-bill-btn")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById("pay-bill-btn").classList.remove("border-gray-200");
});

// transaction toggle here
document
  .getElementById("transaction-btn")
  .addEventListener("click", function (e) {
    e.preventDefault;
    handlertoggle("transaction-section");
    handleButtonToggle("transaction-btn");
  });
