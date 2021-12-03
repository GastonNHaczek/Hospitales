var cantidadDeSintomas = 0;
var mensajeError = " ";
var mensajeAprobado= " ";

function validarFormulario(){
    mensajeError = " ";
    let noHayErrores = [validarCampoVacio('Nombre'), validarCampoVacio('Apellido'), validarDNI(), validarTelefono(), validarCampoVacio('Ciudad'), validarRadio('Sexo'), validarRadio('Paises Visitados'),
     validarSintoma('Fiebre'), validarSintoma('Dolor de Cabeza'), validarSintoma('Tos'), validarSintoma('Dolor de Garganta'),
      validarSintoma('Dificultad al Respirar'), validarTerminosYCondiciones()];
    for(var i = 0 in noHayErrores){
        if(noHayErrores[i] == false){
            document.getElementById("mensaje").innerHTML=mensajeError;
            return false;
        }
    }
    mensajeAprobado = "El formulario fue completado correctamente. " +cantidadDeSintomas +" síntomas de COVID-19 fueron registrados.";
    alert(mensajeAprobado);
    cantidadDeSintomas = 0;
    return true;
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

function validarDNI(){
    var noHayError = true;
    var dni = document.getElementById("dni").value;
    if(!isNaN(dni) && dni.length == 8){
        return noHayError;
    }
    else{
        noHayError = false;
        mensajeError+='<p>El campo DNI no contiene un DNI!</p>';
        return noHayError;
    }
}

function validarTelefono(){
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
            if(tel.charAt(4) != '-' || isNaN(tel.substring(0,3)) || isNaN(tel.substring(5,8))){
                noHayError = false;
                mensajeError+='<p>El campo Teléfono no contiene un teléfono!</p>';
            }
            break;
        default:
            noHayError = false;
            mensajeError+='<p>El campo Teléfono no contiene un teléfono!</p>';
    }
    return noHayError;
}

function validarRadio(nombre){
    let opciones = document.getElementsByName(nombre);
    var seleccionado = false;

    for(var i = 0 in opciones){
        if(opciones[i].checked){
            seleccionado = true;
            if(nombre == 'Paises Visitados' && opciones[i].value == 'si'){
                if(!validarSeleccionDePais()){
                    return false;
                }
            }
        }
    }
    if(seleccionado == false){
        mensajeError+='<p>No se completo el campo ' +nombre +'!</p>';
    }
    return seleccionado;
}

function validarSeleccionDePais(){
    var noHayError = true;
    var seleccion = document.getElementById('paises').value;
    if(seleccion == 0){
        mensajeError+='<p>No selecciono ningún País Visitado!</p>';
        noHayError = false;
    }
    return noHayError;
}

function validarSintoma(sintoma){
    let opciones = document.getElementsByName(sintoma);
    var seleccionado = false;

    for(var i = 0 in opciones){
        if(opciones[i].checked){
            seleccionado = true;
            if(opciones[i].value == 'si'){
                cantidadDeSintomas++;
            }
            if(sintoma == 'Dificultad al Respirar' && opciones[i].value == 'si'){
                if(!validarCampoVacio('Direccion')){
                    return false;
                }
            }
        }
    }
    if(seleccionado == false){
        mensajeError+='<p>No se completo el campo ' +sintoma +'!</p>';
    }
    return seleccionado;
}

function validarTerminosYCondiciones(){
    var noHayError = true;
    if(!document.getElementById('terminos').checked){
        mensajeError+='<p>Usted no acepto los Terminos y Condiciones!</p>';
        noHayError = false;
    }
    return noHayError;
}


function mostrarOcultarPaises(){
    let opciones = document.getElementsByName('Paises Visitados');
    for(var i = 0 in opciones){
        if(opciones[i].checked){
            if(opciones[i].value == 'no'){
                document.getElementById('visitados').style.display='none';
            }
            else{
                document.getElementById('visitados').style.display='block';
            }
        }
    }
}

function mostrarOcultarDireccion(){
    let opciones = document.getElementsByName('Dificultad al Respirar');
    for(var i = 0 in opciones){
        if(opciones[i].checked){
            if(opciones[i].value == 'no'){
                document.getElementById('direccion').style.display='none';
            }
            else{
                document.getElementById('direccion').style.display='block';
            }
        }
    }
}

