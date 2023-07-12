const constButtons = document.querySelectorAll("button").length;
let products = [];

for (let i = 0; i < constButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", showValue);
}

function showValue() {
  if (this.value == 4 || this.value == 5) {
    products.push(this.value + " " + "PROMO");
  } else {
    products.push(this.value);
  }
  alert(products.toString());
}
