$( document ).ready( function(){

  $( "#pbtn" ).click( function(){
    $("#personal").css("display","initial");
  });

  $( "#close" ).click( function(){
    $("#personal").css("display","none");
  });

  //nav functions
  $("#p1").click( function(){
    killNav() ;
    $("#d1").addClass("active");
    $("#p1").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p1.png")' ) ;
  }) ;
  $("#p2").click( function(){
    killNav() ;
    $("#d2").addClass("active");
    $("#p2").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p2.png")' ) ;
  }) ;
  $("#p3").click( function(){
    killNav() ;
    $("#d3").addClass("active");
    $("#p3").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p3.png")' ) ;
  }) ;
  $("#p4").click( function(){
    killNav() ;
    $("#d4").addClass("active");
    $("#p4").addClass("active");
    $(".display").css( "background-image" , 'url("assets/images/p4.png")' ) ;
  }) ;
  
}) ;

function killNav(){
  $("#d1").removeClass("active");
  $("#p1").removeClass("active");
  $("#d2").removeClass("active");
  $("#p2").removeClass("active");
  $("#d3").removeClass("active");
  $("#p3").removeClass("active");
  $("#d4").removeClass("active");
  $("#p4").removeClass("active");
}
