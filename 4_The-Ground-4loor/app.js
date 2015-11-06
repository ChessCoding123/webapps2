(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();
    var data = {
			firstname: $("#first").val(),
			lastname: $("#last").val(),
			email: $("#email").val(),
			message: $("#message").val()
    }

		var url = "http://x.mirman.org:1031/ground4loor"
		console.log(data);

    $.post(url, data, functiton(dat){
      console.log(dat);
    });
  });
});
