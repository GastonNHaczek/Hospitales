$(document).ready(function(){ 
    $(".fc-today-button").text("Hoy");

    $(window).resize(function(){
      if($(this).width()<768){
          $('.vacunacion i').click(function(){
              if($('.vacunacion p').is(":visible"))
                  $('.vacunacion p').hide();
              else{
                  $('.vacunacion p').show();
              }
          });
      }
    })
  });