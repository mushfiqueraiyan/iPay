document.getElementById("cash-out").style.display = "none";
document.getElementById("transection").style.display = "none";

document.getElementById("cash-add-btn").addEventListener("click", function () {
  handleToggle('cash-add', 'flex');
  handleToggle('cash-out', 'none');
  handleToggle("transection", "none");
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle('cash-out', 'flex');
  handleToggle('cash-add', 'none');
  handleToggle("transection", "none");
});

document.getElementById("transection-btn").addEventListener('click', function(){
  handleToggle("transection", "block");
  handleToggle("cash-out", "none");
  handleToggle("cash-add", "none");
})

function handleToggle(id,status){
  document.getElementById(id).style.display = status
}

document
  .getElementById("amount-btn-out")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const send = document.getElementById("send-to").value;
    const outAmount = document.getElementById("out-amount").value;
    const convertedOutAmount = parseFloat(outAmount);
    const pin = document.querySelector("#pin-out").value;
    const convertedPin = parseInt(pin);
    const taka = document.querySelector("#taka").innerText
    const convertedTaka = parseFloat(taka)

    if(send.length === 11 && send.startsWith("01") && convertedPin === 1234){
        
        if(convertedTaka > 0 && convertedTaka >= convertedOutAmount){
             const sum = convertedTaka - convertedOutAmount;
             document.getElementById("taka").innerText = sum;
        } else{
            alert(`${convertedOutAmount} Taka nai re bhai ki out korbi`)
        }
    }else{
        alert('something valid na')
    }
  });
