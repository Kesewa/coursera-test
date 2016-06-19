
$(".new").click(checkForCode);
function checkForCode(){

     $(".new p").remove();
  
  var pts= Math.floor((Math.random()*5)+5);
  var discount= "<p>Your Discount is"+pts+"%</p>";
  alert(discount);
  $(this).append(discount);
  $(".new").each(function(){
  
$(this).unbind("click");
});
}
 
  

  
  


