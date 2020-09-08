function guessCO2(){
    var quantity_attempt = 3;
    var checked = false;
    var country;
    var cancelled = false;
    do{
        quantity_attempt --;
        country = prompt("¿Cual es el país con mas emisión de CO2?")
        if(country === null){
            cancelled = true;
            break;
        }
        else if(!country.match(/^[a-zA-Z]+$/g)){
            alert("Por favor ingrese solo letras");
            quantity_attempt ++;
        }
        else if(country.toLocaleLowerCase().trim() === "china"){
            showAlert("success","Felicitaciones has acertado !")
            var checked = true;
        }
        else if(quantity_attempt == 0){
            showAlert("error","Mala Suerte... Te quedaste sin intentos")  
        }
        else if(quantity_attempt == 2 && !checked){
            alert("Error... Pista: La bandera es color Roja. Te quedan: "+ quantity_attempt + " intentos.");  
        }
        else if(quantity_attempt == 1 && !checked){
            alert("Error... Pista: Se encuentra en el continente asiático. Te quedan: "+ quantity_attempt + " intento.");  
        }
    } while (quantity_attempt > 0 && !checked)
    if(cancelled === false){
    document.getElementById("resultCO2").innerHTML = "El País era <strong>" + "China" + "</strong>";}
};
function guessContamination(){
    var quantity_attempt = 3;
    var checked = false;
    var year;
    var cancelled = false;
    do{
        quantity_attempt --;
        year = prompt("¿En que año se creo la primera Reserva Natural?");
        if(year === null){
            var cancelled = true;
            break;
        }
        parseYear = parseInt(year)
        if(isNaN(parseYear)){
            alert("Por favor ingrese un numero");
            quantity_attempt ++;
        }
        else if(parseYear === 1836){
            showAlert("success","Felicitaciones has acertado !")
            var checked = true;
        }
        else if(quantity_attempt == 0){
            showAlert("error","Mala Suerte... Te quedaste sin intentos")
        }
        else if(quantity_attempt == 2 && !checked){
            alert("Error... Pista: Fue en el siglo XIX. Te quedan: "+ quantity_attempt + " intentos.");
        }
        else if(quantity_attempt == 1 && !checked){
            alert("Error... Pista: El año se encuentra entre 1800 y 1850. Te quedan: "+ quantity_attempt + " intentos.");
        }
    } while (quantity_attempt > 0 && !checked)
    if(cancelled === false){
    document.getElementById("resultContamination").innerHTML = "El año era <strong>" + 1836 + "</strong>";}
};
function guessGlobalWarming(){
    var quantity_attempt = 3;
    var checked = false;
    var year;
    var cancelled = false;
    do{
        quantity_attempt --;
        year = prompt("¿En que año se realizó el Acuerdo de París por el calentamiento global?");
        if(year === null){
            var cancelled = true;
            break;
        }
        parseYear = parseInt(year)
        if(isNaN(parseYear)){
            alert("Por favor ingrese un numero");
            quantity_attempt ++;
        }
        else if(parseYear === 2015){
            showAlert("success","Felicitaciones has acertado !");
            var checked = true;
        }
        else if(quantity_attempt == 0){
            showAlert("error","Mala Suerte... Te quedaste sin intentos");
        }
        else if(parseYear < 2015){
            alert("Error... Pista: Es mayor. Te quedan: "+ quantity_attempt + " intentos.");
        }
        else if(parseYear > 2015){
            alert("Error... Pista: Es menor. Te quedan: "+ quantity_attempt + " intentos.");
        }
    } while ((quantity_attempt > 0 && !checked))
    if(cancelled === false){
    document.getElementById("resultWarming").innerHTML = "El año era <strong>" + 2015 + "</strong>";
    } 
};
function showAlert(typeAlert,message){
    if(typeAlert === "success"){
        document.getElementById("myAlertSuccess").hidden = false;
        document.getElementById("myAlertSuccess").innerHTML = message;
            setTimeout(() => {
                hideAlert(document.getElementById("myAlertSuccess"));
            },2500)  
    }
    else{
        document.getElementById("myAlertWrong").hidden = false;
        document.getElementById("myAlertWrong").innerHTML = message;
            setTimeout(() => {
                hideAlert(document.getElementById("myAlertWrong"));
            },2500)  
    }
}
function hideAlert(value){
    value.hidden = true;
};