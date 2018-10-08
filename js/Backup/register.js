$("#formSignup").on("submit",function(e) {
    e.preventDefault();
    e.stopPropagation();
	
		var username = $("#inputEmail").val();
		var password = $("#inputPassword").val();
		var studentId = 0;

	
		if (password.length < 8){
				$("#modal-failR").modal();
		}else{
			$.ajax(
			{
				method: "POST",	
				url:"../php/register.php",
				data: { username : $("#inputEmail").val(), password : $("#inputPassword").val(), studentID : studentId},
				success : function(msg)
				{
					if (msg.localeCompare("User registered!") == 0){
						$("#modal-registered").modal();
					}else{
						$("#modal-failR").modal();
					}
					$("#formSignup").trigger('reset');
				}
			});
		}
});

