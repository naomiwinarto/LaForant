function showPassword(){
    let a = document.getElementById("password");
    let b = document.getElementById("show");
    
    b.style.transition = "0.2s";

    if (a.type == "password") {
      a.type = "text";
      b.style.color = "#00ca8f";
      b.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Password'
    } else {
      a.type = "password";
      b.style.color = "rgb(80, 80, 80)";
      b.innerHTML = '<i class="fas fa-eye"></i> Show Password'
    }  
}



var valid

function validateEmail(){
    // email
    let email = document.getElementById('email').value + ""
    if (email == ""){
        document.getElementById('one').innerHTML = "Please enter your email address!"
        document.getElementById('email').style.borderColor = "darkred"
        valid = false;
    } 
    else if (email.includes(' ') || email.includes("..") || email.includes("@.") || !email.includes('@') || !email.endsWith('.com') || email.startsWith('@') || email.startsWith('.') || email.endsWith('.') || email.indexOf('@')!=email.lastIndexOf('@')){
        document.getElementById('one').innerHTML = "Please input valid email address!"
        document.getElementById('email').style.borderColor = "darkred"
        valid = false;
    }
    else{
        document.getElementById('one').innerHTML = ""
        document.getElementById('email').style.borderColor = "#00ca8f"
    } 
}

function validateUsername(){
    // username
    let username = document.getElementById('username').value + ""
    if (username == ""){
        document.getElementById('two').innerHTML = "Please enter your username!"
        document.getElementById('username').style.borderColor = "darkred"
        valid = false;
    }    
    else if(username.length<6 || username.length>20){
        document.getElementById('two').innerHTML = "Username must be between 6-20 characters long!"
        document.getElementById('username').style.borderColor = "darkred"
        valid = false;
    }
    else{
        document.getElementById('two').innerHTML = ""
        document.getElementById('username').style.borderColor = "#00ca8f"
    }
}

function validatePassword(){
    // password
    let password = document.getElementById('password').value + ""
    let upper = false;
    let lower = false;
    let num = false;
    let special = false;
    for (let i = 0; i < password.length; i++){
        let char = password.charCodeAt(i);
        if(char >= 48 && char <= 57){
            num = true;
        }
        if(char >= 65 && char <= 90){
            upper = true;
        }
        if(char >= 97 && char <= 122){
            lower = true;
        }
        if(char >= 32 && char <= 47 || char >= 58 && char <= 64 || char >= 91 && char <= 96 || char >= 123 && char <= 126 ){
            special = true;
        }
    }

    if (password == ""){
        document.getElementById('three').innerHTML = "Please enter your password!"
        document.getElementById('password').style.borderColor = "darkred"
        valid = false;
    }
    else if (!(num && upper && lower && special)){
        document.getElementById('three').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character!"
        document.getElementById('password').style.borderColor = "darkred"
        valid = false;
    }
    else if(password.length<8){
        document.getElementById('three').innerHTML = "Password must be at least 8 characters!"
        document.getElementById('password').style.borderColor = "darkred"
        valid = false;
    }
    else{
        document.getElementById('three').innerHTML = ""
        document.getElementById('password').style.borderColor = "#00ca8f"
    }
}

function validateDOB(){
    //date of birth
    let dobInput = document.getElementById('dob').value
    let dob = new Date(dobInput)
    let today = new Date()
    let age = today.getFullYear() - dob.getFullYear()

    if (dobInput == ""){
        document.getElementById('four').innerHTML = "Please choose your date of birth!"
        document.getElementById('dob').style.borderColor = "darkred"
        valid = false;
    }
    else if (age < 13)
    {
        document.getElementById('four').innerHTML = "You must be at least 13 years old to play this game!"
        document.getElementById('dob').style.borderColor = "darkred"
        valid = false;
    }
    else{
        document.getElementById('four').innerHTML = ""
        document.getElementById('dob').style.borderColor = "#00ca8f"
    }
}

function validateNationality(){
    // nationality
    let nationality = document.getElementById('nationality').value
    if (nationality == ""){
        document.getElementById('five').innerHTML = "Please select your nationality!"
        document.getElementById('nationality').style.borderColor = "darkred"
        valid = false;
    }
    else{
        document.getElementById('five').innerHTML = ""
        document.getElementById('nationality').style.borderColor = "#00ca8f"
    }
}

function validateAgreement(){
        // agreement
        let agreement = document.getElementById('agreement').checked
        if (agreement == false){
            document.getElementById('six').innerHTML = "You have to agree to our terms and conditions!"
            valid = false;
        }
        else{
            document.getElementById('six').innerHTML = ""
        } 
}

//validate while user fill the form => generate error messages
window.onload = () => {
    document.getElementById('email').onblur = function (){
        validateEmail()
    }
    document.getElementById('username').onblur = function (){
        validateUsername()
    }
    document.getElementById('password').onblur = function (){
        validatePassword()
    }
    document.getElementById("password").addEventListener("keyup", validatePassword);
    document.getElementById('dob').onblur = function (){
        validateDOB()
    }
    document.getElementById('dob').onchange = function (){
        validateDOB()
    }
    document.getElementById('nationality').onblur = function (){
        validateNationality()
    }
    document.getElementById('nationality').onchange = function (){
        validateNationality()
    }
    document.getElementById('agreement').onchange = function (){
        validateAgreement()
    }
}

//validate when user click the submit button => submit user data
function submitData(x){
    valid = true
    validateEmail()
    validateUsername()
    validatePassword()
    validateDOB()
    validateNationality()
    validateAgreement()

    if(valid == false){
        x.preventDefault();
    }
    else{
        let submit = confirm("Submit data?")
        
        if (submit == true){
            alert("Preregistration Success!")
        }
        else{
            x.preventDefault();
        }
    }
}