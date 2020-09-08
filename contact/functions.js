function sendData(){
    if(validate()){
    showAlert("success","Éxito! un email fue enviado a " + document.getElementById("email").value + ".")
    document.getElementById("apenom").style.border = "0.5px solid #28a745";
    document.getElementById("email").style.border = "0.5px solid #28a745";
    document.getElementById("apenom").value = "";
    document.getElementById("email").value = "";
    }
}
function validate(){
    var nombre = document.getElementById("apenom").value;
    var email = document.getElementById("email").value;
    var isValid = true;
    if(nombre.length < 3){
        showAlert("error","Error ingrese un nombre válido");
        document.getElementById("apenom").style.border = "1px solid red";
        document.getElementById("apenom").focus();
        isValid = false;
    }
    else if(email.length < 8){
        showAlert("error","Error ingrese un email válido");
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("email").focus();
        isValid = false;
    }
    return isValid;
}
function showAlert(typeAlert,message){
    if(typeAlert === "success"){
        document.getElementById("myAlertSuccess").hidden = false;
        document.getElementById("myAlertSuccess").innerHTML = message;
            setTimeout(() => {
                hideAlert(document.getElementById("myAlertSuccess"));
            },3500)  
    }
    else{
        document.getElementById("myAlertWrong").hidden = false;
        document.getElementById("myAlertWrong").innerHTML = message;
            setTimeout(() => {
                hideAlert(document.getElementById("myAlertWrong"));
            },3500);
    }
}
function hideAlert(value){
    value.hidden = true;
};