const message = document.querySelector("#message");
const password = document.querySelector("#password");
const submit = document.querySelector('#submit');
const strength = document.querySelector("#strength");
const email = document.querySelector("#email");
const emailmessage = document.querySelector("#emailmessage");
const date = document.querySelector("#dob");
// const dobmessage = document.querySelector("#dobmessage");
// const individual = document.querySelector("#individual");
const agency = document.querySelector("agency");
const choose = document.querySelector("#choose");

password.addEventListener('input', ()=>{
    if (password.value.length > 0) {
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }

    if (password.value.length <= 4) {
        strength.innerHTML = "weak";
        message.style.color = "red";
        password.style.borderColor = "red";
    }
    else if (password.value.length > 4 && password.value.length < 8) {
        strength.innerHTML = "medium";
        message.style.color = "orange";
        password.style.borderColor = "orange";
    }
    else if (password.value.length > 8 && password.value.length <= 16){
        strength.innerHTML = "strong";
        message.style.color = "green";
        password.style.borderColor = "green";
    }
    else{
        strength.innerHTML = "toolarge";
        message.style.color = "red";
        password.style.borderColor = "red";
    }
})



submit.addEventListener('click', ()=>{
    var checkedvalue = document.querySelector('input[name="type"]:checked');
    // console.log(checkedvalue);
    if (email.value.length == 0) {
        emailmessage.innerHTML = "please enter your email";
        emailmessage.style.color = "red";
    }
    // console.log(date.value.length);
    if(date.value.length == 0){
        dobmessage.innerHTML = "please enter your dob";
        dobmessage.style.color = "red";
    }
    // console.log(password.value.length);
    if(password.value.length == 0){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "please enter your password";
    }

    if(checkedvalue == null){
        choose.innerHTML = "please choose the given option";
        choose.style.color = "red";
    }
    
    if (email.value.length > 0 && date.value.length > 0 && password.value.length > 0) {
        console.log(email.value);
        console.log(date.value);
        console.log(password.value);
        console.log(checkedvalue.value);
        emailmessage.style.display = "none";
        dobmessage.style.display = "none";
        message.style.display = "none";
        choose.style.display = "none";
    }
})
