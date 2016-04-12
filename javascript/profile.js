var url_base = //UNDEFINED

$(document).ready(function(){ 
	//alert("started");
	//var $userid = "0";
	//Things that will end up loading new pages:
	
	//if log out is clicked
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
	
	//Things to apply on the same page
	//if Statistics is selected
	$('#statistics').click(function() {
		$('#statistics').toggleClass("active", true);
		$('#timeline').toggleClass("active", false);
		$('#badges').toggleClass("active", false);
		$('#biography').toggleClass("active", false);
		getStatictis($userid);
	});
	//if timeline is selected
	$('#timeline').click(function() {
		$('#statistics').toggleClass("active", false);
		$('#timeline').toggleClass("active", true);
		$('#badges').toggleClass("active", false);
		$('#biography').toggleClass("active", false);
		getTimeline($userid);
	});
	//if bio is selected
	$('#biography').click(function() {
		$('#statistics').toggleClass("active", false);
		$('#timeline').toggleClass("active", false);
		$('#badges').toggleClass("active", false);
		$('#biography').toggleClass("active", true);
		getBio($userid);
	});	
	//if badge is selected
	$('#badges').click(function() {
		$('#statistics').toggleClass("active", false);
		$('#timeline').toggleClass("active", false);
		$('#badges').toggleClass("active", true);
		$('#biography').toggleClass("active", false);
		getBadge($userid);
	});
	
	$userid = getUser(); //returns the id of the user 		
	getData($userid); //pass user as parameter	
	getBio($userid);

});

function getUser(){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {} 
					}
					
			);
	ajax.done(processUserid);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processUserid(response){
	var userid = response['userid'];
	return(userid);
}

function getData($userid){
	alert("in getdata");
	$.ajax(url_base+"mockup.php", 
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processData);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processData(response /*textStatus, jqXHR*/) {
	/*Luiza don’t forget to add *User’s level and calculate it yourself
	Variables expected back: 
	User’s username “username”
	User’s headline “headline”
	User’s profile picture “picture”
	Player’s location “location”
	User’s total points “totalpoints”	
	List of the badges the user prefers to have on the left of the page “badges”*/


    //var response = JSON.parse(response);
	alert("in here");
	$("#badgesdiv").hide();
	$("#statisticsdiv").hide();
	$("#timelinediv").hide();

	var username = response['username'];
	var headline = response['headline'];
	var image = response['picture'];
																	//TODO SOLVE THE PICTURE PROBLEM	
	var location = response['location'];
	var totalpoints = response['totalpoints'];
	var badges = response['badges'];
	
	//insert stuff in the html here
	$("#picture").attr("src", image);
	$("#username").empty();
   	$("#username").append(username);
   	$( "#headline" ).empty();
   	$("#headline").append(headline);
   	$( "#location" ).empty();
	$("#location").append(location);
	$( "#totalpoints").empty();
	$("#totalpoints").append(totalpoints);
	$( "#level" ).empty();
	$("#level").append(totalpoints/10); // we might change this later!	
																	//TODO INSERT THE prof PICTURE
	$( "#sidebadges" ).empty();
	var i;
	for (i = 0; i < badges.length; i++) { 
		$("#sidebadges").append("<img src='disaster icons/badges/"+badges[i]+"' alt='"+badges[i]+"' width='75' height='75'>");
	}
	
	
	
}

function getStatistics($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processStatistics(response /*textStatus, jqXHR*/) {
    //var response = JSON.parse(response);
	
    /*Player’s date of sign up “date” (I will calculate total time played on jscript) in MM/DD/YYYY format
	Player’s total number of recommendations by:
		List of broad tags “broadtags”
(list of integers) broad tag of item “broadtagsrec”
		List of States of the US “states”
(list of integers) states recommendations “statesrec”
		List of NGO’s “ngos”
(list of integers) ngos recommendations “ngosrec”
		List of disaster’s types “disasters”
(list of integers) disaster’s recommendations “disastersrec”
		List of NGO’s types “ngostypes”
(list of integers) ngos recommendations “ngostypesrec”

	Player’s list of disasters involved in “disastersids”
	Name of those disasters involved in “disastersnames”*/
	
	//hide everything but statistics
	
	$("#badgesdiv").hide();
	$("#timelinediv").hide();
	$("#biographydiv").hide();

	var broadtags = response['broadtags'];
	var broadtagsrec = response['broadtagsrec'];
	var states = response['states'];
	var statesrec = response['statesrec'];
	var ngos = response['ngos'];
	var ngosrec = response['ngosrec'];
	var disasters = response['disasters'];
	var disastersrec = response['disastersrec'];
	var ngostypes = response['ngostypes'];
	var ngostypesrec = response['ngostypesrec'];
	var disastersids = response['disastersids'];
	var disastersnames = response['disastersnames'];
	$("#broadtags").empty();   	
	$("#states").empty();	
	$("#ngosstatistics").empty();
	$("#disasterstype").empty();
	$("#ngostypes").empty();   	
	$("#disastersids").empty();   	
	$("#disastersnames").empty();
	var i;
	for(i = 0; i < broadtags.length; i++){
		$("#broadtags").append("<h5>"+broadtags[i]+": "+broadtagsrec[i]+"</h5>");
	}
	
	for(i = 0; i < states.length; i++){
		$("#states").append("<h5>"+states[i]+": "+statesrec[i]+"</h5>");
	}
	
	for(i = 0; i < ngos.length; i++){
		$("#ngosstatistics").append("<h5>"+ngos[i]+": "+ngosrec[i]+"</h5>");
	}
	
	for(i = 0; i < disasters.length; i++){
		$("#disasterstype").append("<h5>"+disasters[i]+": "+disastersrec[i]+"</h5>");
	}
	
	for(i = 0; i < ngostypes.length; i++){
		$("#ngostypes").append("<h5>"+ngostypes[i]+": "+ngostypesrec[i]+"</h5>");
	}
	
	for(i = 0; i < disastersnames.length; i++){
		$("#disastersnames").append("<h5>"+disastersnames[i]+"</h5>");
	}
	
	$("#statisticsdiv").show();

}

function getTimeline($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processTimeline(response /*textStatus, jqXHR*/) {
    //var response = JSON.parse(response);
		/*
		List of items the player has worked or is working with “items”{
			item title “title” , as given by the NGO when they input wishlist
	item id  “itemid”
			item proposal “proposal” (this is the explanation of why to buy the item)
			link given on the proposal “link”
			total votes received “votes”
			disaster ID’s related to item “disasterid”, not shown on html
			disaster’s name related to item “disastername”
			types of disaster related to item “disastertype”
			NGO’s name related to item “ngoname”
			NGO’s id related to item “ngoid”
			price proposed for item “price”
			time it would take to deliver the item “delivertime”
		}
	List of User’s items ID’s that are currently under voting “itemsids”*/
	
   $("#badgesdiv").hide();
   $("#statisticsdiv").hide();
   $("#biographydiv").hide();
	
	var items = response['items'];
	var itemsids = response['itemsids'];
	$("#tablebody").empty();   	
/*<tr>
	<td><small>Disaster XYZ <img src="img/flag_usa.png" alt="USA Flag" width="75" height="75"> </small></td>
	<td><small>Ladder</small></td>
	<td><small>NGO ABC</small></td>
	<td><small>Hyperlink</small></td>
	<td><small>Description</small></td>
	<td><small>X $</small></td>
	<td><small>Y Dayz</small></td>
	<td><small>Z Points</small></td>
</tr> */
	var i;
	
	for(i=0; i < items.length; i++){
		$("#tablebody").append(
			"<tr><td><small>"+item.disastername+"<img src='"+item.disastertype+".png' alt='"+item.disastertype+"' width='75' height='75'></small></td>"
			+"<td><small>"+item.title+"</small></td>"+"<td><small>"+item.ngoname+"</small></td>"+"<td><small>"+item.link+"</small></td>"
			+"<td><small>"+item.proposal+"</small></td>"+"<td><small>"+item.price+"</small></td>"+"<td><small>"+item.delivertime+"</small></td>"
			+"<td><small>"+item.votes+"</small></td></tr>"
		);
	}

	$("#timelinediv").show();
}

function getBio($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processBio(response /*textStatus, jqXHR*/) {
    //var response = JSON.parse(response);
    /*List of prefered NGO’s of the player “ngos”
	Bio text “bio”
	Player’s specialty “specialty”
	User’s real first name “fname”  
	Last name “lname”
	Date in which the player joined the website “signupdate”

*/

	$("#badgesdiv").hide();
    $("#statisticsdiv").hide();
    $("#timelinediv").hide();
	
    var fname = response['fname'];
    var lname = response['lname'];

    var text = response['bio'];
    var signupdate = response['signupdate'];
    var ngos = response['ngos'];
    var specialty = response['specialty'];
    $("#fullname").empty();
    $("#bio").empty();
    $("#signupdate").empty();
	$("#ngos").empty();

    $("#fullname").append(fname+" "+lname);
    $("#bio").append(text);
    $("#signupdate").append(signupdate);
    for (var i = 0; i < ngos.length; i++){
		$("#ngos").append("<li>"+ngos[i]+"</li>");
	}
	$("#biographydiv").show();

}

function getBadge($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processBadge(response /*textStatus, jqXHR*/) {
   // var response = JSON.parse(response);
   /*List of all the badges(even the ones the user doesn’t have) “allbadges” {	
		description for each badge, text explaining how to earn it  “badgedescription” 
		how many good offers the user has for the badge “numberoffers”. So for example, if you had 3 accepted offers for earthquakes it will return 3 to the earthquake badge.  
		How many offers are needed to complete each badge “offerstocomplete”
}
List of badges this user has “badges”
	List of the prefered badges of the user “preferredbadges” //added the 03/29 */



    $("#biographydiv").hide();
	$("#statisticsdiv").hide();
	$("#timelinediv").hide();
	
	$("#badgesbody").empty();
	
	var allbadges = response["allbadges"];
	var badges = response["badges"];
	
	for (badge in allbadges){
		var userhas = 0;
		var userfavorite = 0;
		for(b in badges){
				if(badge.badgename == b){
					userhas = 1;
				}
		}
		for(b in prefferedbadges){
				if(badge.badgename == b){
					userfavorite = 1;
				}
		}
		if (userhas == 1){
			if(userfavorite == 1){
				$("#badgesbody").append("<tr class='onebadge' id='"+badge.badgename+"'><td><img src ='"+badge.badgename+".png' alt='"+badge.badgename
				+"' Height = '100' width '100'></td> <td><p>Offers: "+badge.numberoffers+"/"
				+badge.offerstocomplete+"</p></td> <td> How to earn it: "+badgedescription
				+"</td><td><form action='demo_form.asp' method='get'>"
				+"<input type='checkbox' name='add' value='1' checked> Favorite <br>"
				+"<input type='checkbox' name='dontadd' value='0'> Not favorite <br>"
				+"<input type='submit' value='Submit'>"
				+"</form></td></tr>");
			}
			else{
			$("#badgesbody").append("<tr class='onebadge' id='"+badge.badgename+"'><td><img src ='"+badge.badgename+".png' alt='"+badge.badgename
				+"' Height = '100' width '100'></td> <td><p>Offers: "+badge.numberoffers+"/"
				+badge.offerstocomplete+"</p></td> <td> How to earn it: "+badgedescription
				+"</td><td><form action='demo_form.asp' method='get'>"
				+"<input type='checkbox' name='add' value='1'> Favorite <br>"
				+"<input type='checkbox' name='dontadd' value='0' checked> Not favorite <br>"
				+"<input type='submit' value='Submit'>"
				+"</form></td></tr>");
			}
		}
		else{
			$("#badgesbody").append("<tr class='onebadge' id='"+badge.badgename+"'><td><img src ='"+badge.badgename+".png' alt='"+badge.badgename+"' Height = '100' width '100'></td> <td><p>Offers: "+badge.numberoffers+"/"+badge.offerstocomplete+"</p></td> <td> How to earn it: "+badgedescription+"</td></tr>");
		}
	}
	
	$("#badgesdiv").show();
}

/*
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
*/
