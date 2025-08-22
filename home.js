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
