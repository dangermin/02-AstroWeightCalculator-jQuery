


function theAnswer(){
	var x = $("#weight").val();
	var y = $("#planets").val();
	var z = x * y;
	if (!isNaN(z) ){
		$("#answerField").html("Your weight is " + Math.round(z) + " space pounds");
		}
		else {
	  	$("#answerField").html("Not a valid input. Please enter a number.");
		}
	}