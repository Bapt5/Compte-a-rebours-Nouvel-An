var date=new Date('Januar 1, 2021 00:00:00');
// var date=new Date('December 31, 2020 11:09:00');
var now;

var x = setInterval(function() {
	if (innerHeight>800){
		document.body.style.height="".concat(innerHeight,"px");
	}
	
	now=Date.now();
	var distance = date - now;
	var unit = document.getElementById("unit").value;
	if (unit=="week"){
		var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
		var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 7)/(1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (weeks==0){
			document.getElementById("week").disabled=true;
			document.getElementById("unit").value="day";
		}else {
			document.getElementById("week").disabled=false;
			document.getElementById("day").disabled=false;
			document.getElementById("hour").disabled=false;
			document.getElementById("minute").disabled=false;
		}
		document.getElementById("clock").innerHTML = weeks + " semaines, " + days + " jours, " + hours + " heures, " + minutes + " minutes, " + seconds + " secondes";
	}else if (unit=="day"){
		var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
		var days = Math.floor(distance /(1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (weeks==0 && days==0){
			document.getElementById("week").disabled=true;
			document.getElementById("day").disabled=true;
			document.getElementById("unit").value="hour";
		}else {
			document.getElementById("day").disabled=false;
			document.getElementById("hour").disabled=false;
			document.getElementById("minute").disabled=false;
		}
		document.getElementById("clock").innerHTML = days + " jours, " + hours + " heures, " + minutes + " minutes, " + seconds + " secondes ";
	}else if (unit=="hour"){
		var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
		var days = Math.floor(distance /(1000 * 60 * 60 * 24));
		var hours = Math.floor(distance / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (weeks==0 && days==0 && hours==0){
			document.getElementById("week").disabled=true;
			document.getElementById("day").disabled=true;
			document.getElementById("hour").disabled=true;
			document.getElementById("unit").value="minute";
		}else {
			document.getElementById("hour").disabled=false;
			document.getElementById("minute").disabled=false;
		}
		document.getElementById("clock").innerHTML = hours + " heures, " + minutes + " minutes, " + seconds + " secondes ";
	}else if (unit=="minute"){
		var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
		var days = Math.floor(distance /(1000 * 60 * 60 * 24));
		var hours = Math.floor(distance / (1000 * 60 * 60));
		var minutes = Math.floor(distance / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (weeks==0 && days==0 && hours==0 && minutes==0){
			document.getElementById("week").disabled=true;
			document.getElementById("day").disabled=true;
			document.getElementById("hour").disabled=true;
			document.getElementById("minute").disabled=true;
			document.getElementById("unit").value="second";
		}else {
			document.getElementById("minute").disabled=false;
		}
		document.getElementById("clock").innerHTML = minutes + " minutes, " + seconds + " secondes ";
	}else {
		var seconds = Math.floor(distance / 1000);
		document.getElementById("clock").innerHTML = seconds + " secondes ";
	}
		
	if (distance <= 0) {
		document.getElementById("clock").innerHTML = "🎉Bonne année🎉"
	}

	if (window.screen.width > window.screen.height){
		document.body.style.backgroundImage = "url(background.jpg)";
	} else{
		document.body.style.backgroundImage = "url(background.jpg)";
	}
	document.body.style.color="black";
	document.getElementById("unitLabel").style.color="white";
	
		
	if (window.screen.width > window.screen.height){
		document.getElementById("h1").style.fontSize="75px";
		document.getElementById("clock").style.fontSize="75px";
	} else{
		document.getElementById("h1").style.fontSize="90px";
		document.getElementById("clock").style.fontSize="90px";
	}
		
}, 50)
