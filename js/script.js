/////////////////// product +/-
$(document).ready(function() {
  $('.num-in span').click(function () {
      var $input = $(this).parents('.num-block').find('input.in-num');
    if($(this).hasClass('minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass('dis');
      }
      else {
        $(this).removeClass('dis');
      }
      $input.val(count);
    }
    else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
      if (count > 1) {
        $(this).parents('.num-block').find(('.minus')).removeClass('dis');
      }
    }
    
    $input.change();
    return false;
  });
  $("#tabComposition").click(function(){    
    $("#textCompostion").css("display","block");
    $("#textDetailProduit").css("display","none");
    /*For activating or Disactivating style tab dialog*/
    $("#tabliDetailProduit").removeClass("tabisActive");
    $("#tabliComposition").addClass("tabisActive");

  });
  $("#tabDetails").click(function(){

    $("#textCompostion").css("display","none");
    $("#textDetailProduit").css("display","block");
    /*For activating or Disactivating style tab dialog*/
    $("#tabliDetailProduit").addClass("tabisActive");
    $("#tabliComposition").removeClass("tabisActive");
    
  });
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
}); 
$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}); 
  
  
});


// product +/-
