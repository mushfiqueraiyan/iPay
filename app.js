const login = document.querySelector("#login-btn");

login.addEventListener('click', function(e){
    e.preventDefault();
    const account = document.getElementById("account").value;
    const pin = document.getElementById("pin").value
    // convert string to integer
    const convertedAcc = parseInt(account)
    const convertedPin = parseInt(pin)

    if(account.length === 11){
        if(convertedPin === 1234){
          window.location.href = 'home.html'
        }
        else{
            alert('Pin tik kor')
        }
    }
    else{
        alert('Account tik kor')
    }
})