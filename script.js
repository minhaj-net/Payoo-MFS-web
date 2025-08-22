// Log in button functionality
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  let mobailNumber = 12345678901;
  let pinNumber = 1234;
  const mobailNumberValue = document.getElementById("mobail-number").value;
  const mobailNumberValueConvert = parseInt(mobailNumberValue);
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConvert = parseInt(pinNumberValue);
  console.log(mobailNumberValueConvert, pinNumberValueConvert);

  if (
    mobailNumberValueConvert === mobailNumber &&
    pinNumberValueConvert === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid cradential");
  }
});
