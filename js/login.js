$("#formSignIn").on("submit",function(e) {
    e.preventDefault();
    e.stopPropagation();
	
		$.ajax(
		{
			method: "POST",	
			url:"../php/login.php",
			data: {username : $("#inputEmailSign").val(), password : $("#inputPasswordSign").val()},
				success : function(msg)
				{
                    if(msg == "Verify Email")
                    {
                        $("#formSignIn").trigger('reset');
						$(".error").text("Please verify email");
                        $("#modal-email").modal();
                    }
					else
					{
						msg = msg.slice(-8);
                    	if (msg == "loggedin")
						{
							$(".error").text("Logging in please wait...");
							$("#formSignIn").trigger('reset');
							$("#modal-login").modal();
							setTimeout(function(){					
								location.reload(true);
							},3000);
						}
						else
						{
							$("#formSignIn").trigger('reset');
							$(".error").text("Incorrect login details. ");
							$(".reset").text("Click here to reset password");
							$("#modal-failL").modal();
						}
					}
					
				}
		});
    return false;
});
