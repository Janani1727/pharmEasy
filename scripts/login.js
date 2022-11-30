


let btn1 = document.getElementById('myOtp');
btn1.addEventListener('click',function () {

    sendOtp1();

});

const sendOtp1 = () => {

    let otp = 7793;

    localStorage.setItem('otp',JSON.stringify(otp));

    let num = document.getElementById('number').value;

    localStorage.setItem('number',JSON.stringify(num));

    let error = document.getElementById('msg');

    if(num==''){
        error.innerText = 'Enter valid number';
    }
    else if(num.length<10){
        error.innerText = 'Enter valid number';
    }
    else{
        alert('OTP sent to your number');
        window.location.href='otp.html';
    }

}


