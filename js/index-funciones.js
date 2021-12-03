$(document).ready(function(){ 
    $(window).resize(function(){
        if($(this).width()<768){
            $('.sobre-la-clinica').click(function(){
                if($('.sobre-la-clinica p').is(":visible"))
                    $('.sobre-la-clinica p').hide();
                else{
                    $('.sobre-la-clinica p').show();
                }
            });
            $(".cuerpo-medico").click(function(){
                
                if($('.cuerpo-medico p').is(":visible"))
                    $('.cuerpo-medico p').hide();
                else{
                    $('.cuerpo-medico p').show();
                }
            });
            $(".dias-horarios").click(function(){
               
                if($('.dias-horarios p').is(":visible"))
                    $('.dias-horarios p').hide();
                else{
                    $('.dias-horarios p').show();
                }
            });
        }else{
            $('.sobre-la-clinica p').show();
            $('.cuerpo-medico p').show();
            $('.dias-horarios p').show();
        }
    });
   
     
});