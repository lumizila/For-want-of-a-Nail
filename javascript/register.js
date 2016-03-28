var url_base = //UNDEFINED

$(document).ready(function(){
	var mapProp = {
		center:new google.maps.LatLng(35.54339, -79.02591),
		zoom:6,
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	 var map=new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
    
    $('#confirm').click(function() {		
		$newusername = document.getElementById("username").value;
		$newpassword = document.getElementById("password").value;
		$newfname = document.getElementById("fname").value;
		$newlname = document.getElementById("lname").value;
		$newemail = document.getElementById("email").value;
		$retypepas = document.getElementById("retypepas").value;
		if($newemail =="" || $newpassword =="" || $newusername=="" || $newfname =="" || $newlname ==""|| $retypepas == ""){
			alert("Please fill in all the fields to create a New Account.");
			return;
		}
		else if($newpassword != $retypepas){
			alert("Passwords do not match.");
			return;
		}
		
		sendData(); //send data to the database
					      
	});
});

function sendData(){
	$.ajax(url_base + "/login.php", // MATTEW: you can change here to call the php code you prefer
					{type: "POST",
						  dataType: "json",
						  data: {"newnickname": $newusername, "newpassword" : $newpassword, "newfname" : $newfname, "newlname" : $newlname, "newemail" : $newemail,},
						 success: function(todo_json, status, jqXHR) { 
						  	alert(jqXHR.responseText); 	
						  	//load main page of the game for THE NEW user, activate cookies

						  }, 
						  error: function(jqXHR, status, error) {
						  	alert(jqXHR.responseText);
					      }
					}
			);
			
}

//function successFn(result){
	//load main page of the game for THE NEW user, activate cookies
//}

//function failFn(xhr, status, strErr){
	//treat error
//}

