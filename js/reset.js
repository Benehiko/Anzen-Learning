$("#formReset").on("submit",function(e) {
    e.preventDefault();
    e.stopPropagation();
	
		var email = $("#inputEmail").val();
			$.ajax(
			{
				method: "POST",	
				url:"../php/resetpass.php",
				data: { email : $("#inputEmail").val(), },
				success : function(msg)
				{
					alert("Password reset link has been sent to the specified email.");
					$("#formReset").trigger('reset');
				}
			});
		
});

