$(document).ready(function(){
    $("#popup-italiano").click(function(){
        
        if($(".italiano").is(":visible")){
            $(".italiano").hide();

        }
        else{
            $(".italiano").show();
        }
    });
    $("#popup-buen-pastor").click(function(){
        
        if($(".buen-pastor").is(":visible")){
            $(".buen-pastor").hide();

        }
        else{
            $(".buen-pastor").show();
        }
    });
    $("#popup-haedo").click(function(){
        
        if($(".haedo").is(":visible")){
            $(".haedo").hide();

        }
        else{
            $(".haedo").show();
        }
    });
    $(".x-haedo").click(function(){
        $(".haedo").hide();

    });
    $(".x-buen-pastor").click(function(){
        $(".buen-pastor").hide();

    });
    $(".x-italiano").click(function(){
        $(".italiano").hide();

    });
}); 