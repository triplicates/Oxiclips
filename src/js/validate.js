function validate(){
    let btn = document.querySelector('.feedback__form-btn '),
    mail = document.querySelector('.feedback__form-mail'),
    reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    

    btn.addEventListener('click', function(e){
        e.preventDefault()
        let value = mail.value;
        if(reg.test(value)){
            sendData(mail.value)
            mail.style.display = "none";
            btn.style.flexBasis = "100%"
            btn.value = "You are sign up"
            btn.classList.add("feedback__form-btn_showed")
            btn.setAttribute('disabled', true)
        }
        else{
            mail.style.border = "1px solid #c14654"
            setTimeout(() => {
                mail.style.border = "1px solid #1d1f24"
            }, 1000)
        }
    })
    

}
validate()

function sendData(value){
    let xhr = new XMLHttpRequest()
    let data = JSON.stringify({
        mail : `${value}`
    })
    xhr.open("POST", './php_scripts/mail.php')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data)
}