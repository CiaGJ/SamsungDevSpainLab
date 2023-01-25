function showErrorIcon(id, icon) {
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id).style.borderWidth = "2px";
    document.getElementById(icon).style.opacity = "1";
}

function showCheckIcon(id, icon) {
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.borderWidth = "2px";
    document.getElementById(icon).setAttribute("src","images/success-icon.svg");
    document.getElementById(icon).style.opacity = "1";
}

function validateForm() {
    var a = document.forms["myForm"]["name"].value;
    var b = document.forms["myForm"]["email"].value;
    var c = document.forms["myForm"]["password"].value;
    var d = document.forms["myForm"]["pass_confirmation"].value;
    var isValid;
    // name validation
    if (a == null || a == "") {
        showErrorIcon("name", "iconName");
        isValid = false;
    }else{
        showCheckIcon("name", "iconName")
    }   

    // email validation
    if(b == null || b == ""){
        showErrorIcon("email", "iconEmail");
        isValid = false;
    }else{
        showCheckIcon("email", "iconEmail")

    }
    // pass validation
    if(c == null || c == ""){  
        showErrorIcon("password", "iconPass")
        isValid = false;
    }else{
        showCheckIcon("password", "iconPass")
    }
    // pass confirmation validation
    if(d == null || d == ""){
        showErrorIcon("pass_confirmation", "iconPassConf")
        isValid = false;
    }else{
        showCheckIcon("pass_confirmation", "iconPassConf")
    }

    if(isValid == false){
        return false;
    }
}