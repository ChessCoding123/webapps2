$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();
    $("#textOutput").innerHTML(
      $("#firstname").html(), $("#lastname").html(), $("#email").html(), $("#message").html()
    );
  })
});
