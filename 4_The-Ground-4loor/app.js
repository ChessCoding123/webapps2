$(document).ready(function(){
  $("#contact-form").submit(function(event){
    //event.preventDefault();
    //$("#textOutput").innerHTML(
    console.log($("#firstname").html() + $("#lastname").html() + $("#email").html() + $("#message").html());
    );
  })
});
