document.getElementById("cash-out").style.display = "none";

document.getElementById("cash-add-btn").addEventListener("click", function () {
  document.getElementById("cash-add").style.display = "flex";
  document.getElementById("cash-out").style.display = "none";
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("cash-add").style.display = "none";
  document.getElementById("cash-out").style.display = "flex";
});

document
  .getElementById("amount-btn-out")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const send = document.getElementById("send-to").value;
    const outAmount = document.getElementById("out-amount").value;
    const convertedOutAmount = parseFloat(outAmount);
    const pin = document.querySelector("#pin").value;
    const convertedPin = parseInt(pin);
    const taka = document.querySelector("#taka").innerText
    const convertedTaka = parseFloat(taka)

    if(send.length === 11 && send.startsWith("01")){
        
        if(convertedTaka > 0 && convertedTaka >= convertedOutAmount){
             const sum = convertedTaka - convertedOutAmount;
             document.getElementById("taka").innerText = sum;
        } else{
            alert(`${convertedOutAmount} Taka nai re bhai ki out korbi`)
        }
    }else{
        alert('Number valid na')
    }
  });
