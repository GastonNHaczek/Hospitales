$(document).ready(function(){ 
    $(".hamburguesa").click(function(){
        console.log("entre");
      if($('.ocultar-menu').is(":visible")){
          $('.ocultar-menu').slideUp();
          $('.barra-busqueda-escritorio').hide();
          

      }else{
        $('.ocultar-menu').slideDown();
        $('.barra-busqueda-escritorio').hide();
      }
    });
});
