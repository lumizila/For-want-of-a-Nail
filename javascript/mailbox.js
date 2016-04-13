var url_base = //UNDEFINED

$(document).ready(function(){
	alert("started");
	$("#newmessage").hide();
	/*getEmails();

	$('#NewMesButton').click(function(){
		openNewMes();
	});
	
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
	*/
}

function getEmails(){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {} 
					}
					
			);
	ajax.done(processEmails);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processEmails(response){
/*Variables expected back:
	List of messages “messages”{
		If this message is a sent message return 1 on “sent” else return “0”
		Message id “messageid”
		Message body text “text”
		Title of the message “title”
		date message was sent “date”
		time message was sent “time”
		userid of the other player who sent the message to this player “userid”
		username of that player(same order) “username”
	}*/
	var messages = response['messages'];
	var i;
	$("#emails").empty();   	

	for(i=0; i < messages.length; i++){	
		$('#emails').append("<div class='email sent"+messages[i].sent+"'><tr><td>"+messages[i].username+"</td><td>"+messages[i].title+"</td><td>"+messages[i].text+"</td><td>"+messages[i].date+"</td><td>"+messages[i].time+"</td><td> <button type='button' id="+messages[i].messageid+"/"+messages[i].userid+" class='reply btn btn-primary-outline'>Reply</button></td></tr></div>");
	}
	
	$('.reply').click(function() {
		//the reply to a certain message
	});
}

function openNewMes(){
	$('#newmessage').show();
	$('#sendNewMes').click(function(){
		$username = $("#receiverusername").text();
		$subject = $("#subject").text();
		$body = $("#mesbody").text();
		/*user who received “recipientid”, 
		message sent “message”
		Title of the message “title”
		*dont forget to add date and time*
		If this message is an answer to another message “messageid” of the message the user is answering to.*/
		
		$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "POST",
						  dataType: "json",
						  data: {"recipientid": $username, "message": $body, "title" : $subject, "messageid" : -1} 
					}	
				);
		ajax.done(function(
			$('#newmessage').hide();
		));
		ajax.fail(function( jqXHR, textStatus, errorThrown) {
			alert("There was an error on the server, please try again");
		});
	});
}
