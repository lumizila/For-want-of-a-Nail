var url_base = "";//UNDEFINED

$(document).ready(function(){ //CALLED WHEN DASHBOARD IF FINISHED LOADING, this is the "main" of a C program, its the first Method/Function called when website opens.
	alert("started");
	var $userid = "0";
	$userid = getUser(); //returns the id of the user 	
	
	//loading initial map with pins and the filters
	getFilters(); //The 3 of us will have to deal with this part
	
	//if submit is clicked
		//Mika and Jeff do this part
		
	//if a disaster is clicked
		//Luiza do this part
}

function getUser(){ //Mika and Jeff : ignore getUser and ProcessUserid and the GetFilters functions
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

function getFilters(){ 
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {} 
					}
					
			);
	ajax.done(processFilters);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processFilters(response){
		/*~All the disasters to put them on the map
			Php file:
			Method: GET
			Parameters: NULL
			Variables expected back: 
			List of Disasters “disasters”{
			“disasterid”, 
			“disastername”, 
			disaster’s latitude/longitude “coordinates”{
			“latitude” 
			“longitude”
			} ,
			disaster’s type “disastertype”,
			disaster’s US’s state “disasterstate”,
			list of disaster’s NGO’s IDs “disasterngosids”,
			list of disaster’s broad tags of the items required on that disaster “disasterbroadtags”
			}
		*/
		
		var disasters = response['disasters'];
		
		for(var i = 0; i < disasters.length; i++){
				//MIKA AND JEFF: INSERT YOUR CODE HERE TO LOAD THE INITIAL PINS TO THE MAP
				//You can see "profile.js" to get more examples
				
		}
}

