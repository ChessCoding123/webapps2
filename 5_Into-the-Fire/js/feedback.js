var ref = new Firebase("https://into-the-fire.firebaseio.com/");

$(document).ready(function(){
  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
    var data = {
      first:$("#first").val(),
      last:$("#last").val(),
      email:$("#email").val(),
      text:$("#text").val(),
      timestamp:new Date().getTime()
    }
    ref.push(data);
    console.log("Form submitted!");
  });

  function updateForm(form) {
    $("#widgets").html("");
    for (var f in form) {
      var formInput = form[f];
      var newLi = $(document.createElement("li"));
      newLi.append("<h1>" + formInput.timestamp + "</h1>");
      newLi.append("<h2>" + formInput.first + " " + formInput.last + "</h2>");
      newLi.append("<p>" + formInput.email + "</p>");
      newLi.append("<p>" + formInput.text + "</p>");
      $("#inputStorage").append(newLi);
    }
  }

  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    updateForm(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

});
