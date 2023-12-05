const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const submitButton = document.getElementById("submitButton");

//Checks if passwords are viable on frontEnd
function checkPass(){
    let value1 = password.value;
    let value2 = passwordConfirm.value;
    if(value1 == value2){
        console.log("yay!");
    }
    else{
        password.classList.add("error");
        passwordConfirm.classList.add('error');
        
    }
}

submitButton.addEventListener("click", checkPass);
