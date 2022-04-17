function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

	// Validation of the principal. If negative or 0 alert user and focus on principal
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

	// Display Result
	document.getElementById("result").innerHTML="If you deposit <mark>"+principal+",</mark><br>at an interest rate of <mark>"+rate+"%</mark><br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark><br>";
}

// Function that reads the value of the range slider and displays it the <span> adjacent to the slider
function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval+'%';
}

