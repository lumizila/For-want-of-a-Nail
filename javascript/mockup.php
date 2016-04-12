<?php
	if($SERVER['REQUEST_METHOD'] == "GET"){
			$data = {"employees":[
					{"firstName":"John", "lastName":"Doe"},
					{"firstName":"Anna", "lastName":"Smith"},
					{"firstName":"Peter", "lastName":"Jones"}],
					 "badges":["earthquake badge bronze.png", "fire badge bronze.png"],
					 "username":"JohnJunior",
					 "headline":"Hey! I didnt want to be doing this",
					 "picture":"https://s-media-cache-ak0.pinimg.com/236x/84/6b/b0/846bb019b7ceb8b143d79016b638d320.jpg",
					 "location":"Very far away",
					 "totalpoints":"50"}
			return $data;
	}
 /*List of prefered NGO’s of the player “ngos”
	Bio text “bio”
	Player’s specialty “specialty”
	User’s real first name “fname”  
	Last name “lname”
	Date in which the player joined the website “signupdate”*/
	
	$bio = {"bio": "I am nice and all and all Etiam tortor ipsum, accumsan eu eleifend in, efficitur nec enim. Integer et augue eget nunc volutpat fringilla. Aliquam erat volutpat. Sed neque velit, vehicula ut odio vitae, rutrum fringilla felis. Maecenas nulla ex, condimentum nec ligula ac, bibendum dignissim quam. Maecenas ut commodo purus. Mauris pulvinar diam neque, sed feugiat urna convallis eget. Aliquam a tristique tortor. Donec tempor rhoncus tincidunt. Donec cursus dapibus ipsum id lobortis. Morbi vestibulum, elit pretium laoreet interdum, massa velit suscipit tortor, quis gravida lorem ipsum ut est.",
		"specialty": "Farmer",
		"fname" : "Diane",
		"lname": "Pozevs",
		"signupdate": "03/04/1995",
		"ngos" : ["UNICEF", "UNIUNI", "UNIBLA"]}
		
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
	
	$statistics = {"broadtags":["clothes", "food"],
					"broadtagsrec":["1", "2"],
					"states":["North Carolina", "South Carolina"],
					"statesrec":["3", "5"],
					"ngos":["UNICEF", "UNIUNI", "UNIBLA"],
					"ngosrec":["4", "0", "1"],
					"disasters":["the japan earthquake", "the USA tornado"],
					"disastersrec":["10","90"],
					"ngostypes":["Christian", "Children"],
					"ngostypesrec":["0", "7"],
					"disastersids":["4B7C", "9FFF", "7A7A"],
					"disastersnames": ["the japan earthquake", "the USA tornado", "The tsunami in Alaska"]}
?>


