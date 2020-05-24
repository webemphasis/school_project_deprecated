$(document).ready(function() {
    $(".mainCard .pictureCard .svg_white").hide();
    $(".mainCard .pictureCard .svg_blue").show();
  $(".mainCard .pictureCard").on("mouseenter", function(e){
    $(this).css({"background-color": "#4980fe"});
    $(this).find(".svg_blue").hide();
    $(this).find(".svg_white").show(); 
  }).on("mouseleave", function(e){
    $(this).css({"background-color": "#fff"});
    $(this).find(".svg_blue").show();
    $(this).find(".svg_white").hide(); 
  });

  // dropdown menu
  $(".log_dropdown").hide(); 
  var clicks = 0;
  $(".myArrow").on("click", (e)=>{
    
    
  if (clicks == 0) {
  $(".log_dropdown").show();
    clicks++;
    } else {
    $(".log_dropdown").hide();
    clicks--; 
  }
  })

})