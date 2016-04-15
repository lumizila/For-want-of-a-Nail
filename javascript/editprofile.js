var url_base = //UNDEFINED

$(document).ready(function(){
	alert("started");
	getEditData();
	$('#profile').click(function(){
		window.location.href = "profile.html";
	});
	
	$('#logout').click(function() {
		//disactivate cookies
															//disactivateCookies(); 
															//TODO: add this function to our document
		//load landing page
		window.location.href = "landpage.html";
	});
	
	//if dashboard is clicked
	$('#dashboard').click(function() {
		window.location.href = "dashboard.html";
	});
	
	//if edit profile is clicked
	$('#edit').click(function() {
		window.location.href = "editprofile.html";
	});
	
	//if help is clicked
	$('#help').click(function() {
		window.location.href = "help.html";
	});
	
	//if mailbox is clicked
	$("#mailbox a").click(function() {
		alert("clicked");
		window.location.href = "mailbox.html";
	});
	
	if($("#submit".click(function(){
		successEditData();
	});
}

function getEditData(){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {} 
					}
					
			);
	ajax.done(processEditData);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processEditData(response){
	/*~Once clicked “EDIT PROFILE”
Php file:
Method: GET
Parameters: NULL(information read from browser)
Variables expected back:
	User’s real first name “fname”
	User’s real last name “lname”
	User’s headline “headline”
	User’s profile picture “picture”
	User’s biography “biography”
User’s specialty “specialty”
List of prefered NGO’s “ngos”
	User’s residence state in the US “state”*/

	var fname = response['fname'];
	var lname = response['lname'];
	var headline = response['headline'];
	var picture = response['picture'];
	var biography = response['biography'];
	var specialty = response['specialty'];
	var ngos = response['ngos'];
	var state = response['state'];
	
	$("#fname").append(fname);
	$("#lname").append(lname);
	$("#headline").append(headline);
	$("#picture").attr("src", picture);
	$("#biography").append(biography);
	$("#specialty").append(specialty);
	for (i = 0; i < ngos.length; i++) { 
		$("#ngos").append("<div class='checkbox'><label><input class='ngo' type='checkbox' value=''>"+ngos[i]+"</label></div>");	
	}
	$("#state").append(state);
}

function successEditData(response){
	/*User’s real first name “fname”
Last name “lname”
	User’s headline “headline”
	User’s profile picture “picture”
	User’s biography “biography”
User’s specialty “specialty”
List of prefered NGO’s “ngos”
User’s residence state in the US “state”
*/
	$fname = $("#fname").text();
	$lname = $("#lname").text();
	$headline = $("#headline").text();
	//$("#picture").attr("src", picture); // JEFF AND MATTHEW GOTTA WORRY ABOUT THAT SEE : http://www.w3schools.com/php/php_file_upload.asp
	$biography = $("#biography").text();
	$specialty = $("#specialty").text();
	$ngos[];
	var i = 0;
	$('.ngo').each(function(){
		if($(this).attr("value") == checked){
			$ngos[i] = $(this).attr("value");
			i ++;
		}
	});
	
	$state =$('#states').find(":selected").text();
	
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "POST",
						  dataType: "json",
						  data: {"fname": $fname, "lname": $lname, "headline" : $headline, "biography" : $biography, "ngos": $ngos, "state": $state} 
					}
					
			);
	ajax.done(goToDashboard);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function goToDashboard(response){
	window.location.replace("profile.html");
}
