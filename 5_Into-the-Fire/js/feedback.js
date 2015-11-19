var ref = new Firebase("https://into-the-fire.firebaseio.com/"); //Use your app's Firebase URL

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

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
    console.log("Form submitted!");
    $("<div>").innerHTML =
  });
});
