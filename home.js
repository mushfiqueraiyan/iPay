const addMoney = document.querySelector("#amount-btn");

addMoney.addEventListener('click', function(e){
    e.preventDefault();
    const account = document.querySelector("#account").value
    const pin = document.querySelector("#pin").value
    const convertedPin = parseInt(pin)
    const amount = document.querySelector("#amount").value
    const convertedAmount = parseInt(amount)
    const taka = document.querySelector("#taka").innerText
    const convertedTaka = parseFloat(taka)

    if(account.length === 11){
        if(convertedPin === 1234){
            const sum = convertedAmount + convertedTaka
            document.getElementById('taka').innerText = sum

        }
        else{
            alert('pin tik kor')
        }
    }else{
        alert('Account no tik kor')
    }
})



