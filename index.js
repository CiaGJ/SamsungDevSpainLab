function showErrorIcon(id, icon) {
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id).style.borderWidth = "2px";
    document.getElementById(icon).setAttribute("src","images/error-icon.svg");
    document.getElementById(icon).style.opacity = "1";
}

function showCheckIcon(id, icon, msgId) {
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.borderWidth = "2px";
    document.getElementById(icon).setAttribute("src","images/success-icon.svg");
    document.getElementById(icon).style.opacity = "1";
    document.getElementById(msgId).style.opacity = "0";
}

function showErrorMessage(id, msg){
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.opacity = "0.8";
}

function passLenValidation(password){
    var pass_length = password.length;
    if (pass_length < 8){
        return true;
    }
    return false;
}

// name validation
function validateName(){
    var a = document.forms["myForm"]["name"].value;
    const regexName = new RegExp(/\d/gm)
    if (a == null || a == "") {
        showErrorIcon("name", "iconName");
        showErrorMessage("nameMsg", "Rellene este campo")
        return false;
    }else if(regexName.test(a)){
        showErrorIcon("name", "iconName");
        showErrorMessage("nameMsg", "Nombre no válido")
        return false;
    }else{
        showCheckIcon("name", "iconName","nameMsg")
        return true;
    }  
}

// email validation
function validateEmail(){
    var b = document.forms["myForm"]["email"].value;
    if(b == null || b == ""){
        showErrorIcon("email", "iconEmail");
        showErrorMessage("emailMsg", "Rellene este campo")
        return false
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)){
        showErrorIcon("email", "iconEmail");
        showErrorMessage("emailMsg", "Email inválido")
        return false;
    }else {
        showCheckIcon("email", "iconEmail","emailMsg")
        return true;
    }
}

//pass validation
function validatePass(){
    var c = document.forms["myForm"]["password"].value;
    if(c == null || c == ""){  
        showErrorIcon("password", "iconPass")
        showErrorMessage("passMsg", "Rellene este campo")
        return false
    }else if(passLenValidation(c)){
        showErrorIcon("password", "iconPass")
        showErrorMessage("passMsg", "Debe tener al menos 8 caracteres")
        return false
    } else {
        showCheckIcon("password", "iconPass","passMsg")
        return true
    }
}

// pass confirmation validation
function validatePassConf(){
    var c = document.forms["myForm"]["password"].value;
    var d = document.forms["myForm"]["pass_confirmation"].value;
    if(d == null || d == ""){
        showErrorIcon("pass_confirmation", "iconPassConf")
        showErrorMessage("passConfMsg", "Rellene este campo")
        return false
    }else if(passLenValidation(d)){
        showErrorIcon("pass_confirmation", "iconPassConf")
        showErrorMessage("passConfMsg", "Debe tener al menos 8 caracteres")
        return false
    } else if(c !== d) {
        showErrorIcon("pass_confirmation", "iconPassConf")
        showErrorMessage("passConfMsg", "Las contraseñas no coinciden")
        return false
    } else {
        showCheckIcon("pass_confirmation", "iconPassConf","passConfMsg")
        return true
    }
}

// form validation
function validateForm() {
    const isValid = [validateName, validateEmail, validatePass, validatePassConf].reduce((valid, f) => f() && valid, true)

    if(isValid){
        alert("La inscripción se ha realizado correctamente. ¡Gracias!")
        return true;
    } else {
        return false;
    }
}
