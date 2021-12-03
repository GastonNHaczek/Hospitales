var cantidadDeSintomas = 0;
var mensajeError = " ";
var mensajeAprobado= " ";

function validarFormulario(){
    mensajeError = " ";
    let noHayErrores = [validarCampoVacio('Nombre'), validarCampoVacio('Apellido'),validarEmail('email'),validarTelefono('telefono')];
    for(var i = 0 in noHayErrores){
        if(noHayErrores[i] == false){
            document.getElementById("mensaje").innerHTML=mensajeError;
            return false;
        }
    }
  
}

function validarCampoVacio(campo){
    var noHayError = true;
    var campoAux = document.getElementById(campo).value;
    if(campoAux.length == 0){
        mensajeError+='<p>El campo '+ campo +' esta vacío!</p>';
        noHayError = false;
    }
   return noHayError;
}
function validarEmail(campo){

    var emailRegex= /^[A-Z-a-z]+@[A-Z-a-z]+(.com)$/;
    var campoEmail= document.getElementById(campo).value;
    if(!emailRegex.test(campoEmail)){
        mensajeError += '<p>El campo '+ campo +' es incorrecto!,ingrese un mail valido</p>';
        return false;
    }
    
}

function validarTelefono(){
    var telefonoRegex=/^([0-9]{4})-([0-9]{4})$/;
    var noHayError = true;
    var tel = document.getElementById("telefono").value;

    switch(tel.length){
        case 8:
            if(isNaN(tel)){
                noHayError = false;
                mensajeError+='<p>El campo Teléfono no contiene un teléfono!</p>';
            }
        break;
        case 9:
            if(!telefonoRegex.test(tel)){
                noHayError = false;
                mensajeError+='<p>El campo Teléfono no contiene un teléfono!</p>';
            }
        break;
        
    }
    return noHayError;
}

function consultaText(campo){
    var limiteCaracteres=1000;
    var caracteresActuales=document.getElementById(campo).value.length;
    var caracteresRestantes=limiteCaracteres-caracteresActuales;
    document.getElementById("palabras-restantes").innerHTML=caracteresRestantes + "/" + limiteCaracteres;
    if(caracteresRestantes<5){
        document.getElementById("palabras-restantes").style.color='red';
    }
    else{
        document.getElementById("palabras-restantes").style.color='white';
    }
}
