


let subBtn = document.getElementById('entOtp');
subBtn.addEventListener('click',function() {
    verifyOtp();
})



let entNum = JSON.parse(localStorage.getItem('number'));
let abc = document.querySelector('.num');
abc.innerText = `+91 ${entNum}`;




const verifyOtp = () => {

    let OTP = JSON.parse(localStorage.getItem('otp'));

    let enteredOtp = document.getElementById('otp').value;
    if(OTP == enteredOtp){
        alert('Login Successful');
        window.location.href='user.html';
        
       
    }
    else{
        let error = document.getElementById('msg');
        error.innerText = 'Invalid OTP';
        
    }
}


document.getElementById("logo").addEventListener("click",function(){
    window.location.href="index.html"
})

document.getElementById("logo").addEventListener("click",function(){
    window.location.href="index.html"
})

