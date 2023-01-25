function validateForm() {
    var a = document.forms["myForm"]["name"].value;
    var b = document.forms["myForm"]["email"].value;
    var c = document.forms["myForm"]["password"].value;
    var d = document.forms["myForm"]["pass_confirmation"].value;
    var isValid;
    // name validation
    if (a == null || a == "") {
        document.getElementById("name").style.borderColor = "red";
        // document.getElementById("name").style.background = "url(images/error-icon.svg) no-repeat scroll 7px 7px";
        isValid = false;
    }else{
        document.getElementById("name").style.borderColor = "green";
    }   

    // email validation
    if(b == null || b == ""){
        document.getElementById("email").style.borderColor = "red";
        isValid = false;
    }else{
        document.getElementById("email").style.borderColor = "green";

    }
    // pass validation
    if(c == null || c == ""){  
        document.getElementById("password").style.borderColor = "red";
        isValid = false;
    }else{
        document.getElementById("password").style.borderColor = "green";

    }
    // pass confirmation validation
    if(d == null || d == ""){
        document.getElementById("pass_confirmation").style.borderColor = "red";
        isValid = false;
    }else{
        document.getElementById("pass_confirmation").style.borderColor = "green";
    }

    if(isValid == false){
        return false;
    }
}