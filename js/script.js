//Introscherm, verdwijnt met animatie in 2 seconden
const introScreen = document.querySelector('.introScreen');

document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{
		introScreen.classList.add('hide');
	}, 1500);
})


// Maak functie aan voor greetings in introscherm
function getGreetings(){
	var currentDT = new Date();
	var body = document.body;
	var greeting;
	var h = currentDT.getHours();
		
	//Slaat images op in een array	
	var images = [
		'img/earth.png',
		'img/night.png'
	];

	//Conditional styling en image voor visualisatie van dag/nacht 
		if (h <=12){
		  greeting = 'Good morning Martians,'; 
		  document.getElementById('earth').src = images[0];
		  document.querySelector('h2').style.color = '#43C4ED';
		  document.getElementById('date').style.color = '#43C4ED';
		 
		}
		else if (h >=12 && h <18){
		   greeting = 'Good afternoon Martians,';
		    document.getElementById('earth').src = images[0];
		    document.querySelector('h2').style.color = '#F86B1C';
		    document.getElementById('date').style.color = '#F86B1C';
		}
		 else if (h >=18 && h <24){
			greeting = 'Good evening Martians,';
		    document.getElementById('earth').src = images[1];
		    document.querySelector('h2').style.color = '#3665A1';
		    document.getElementById('date').style.color = '#3665A1';
		  
		}
		
	//Update de content en styling van de pagina elke 1000ms	
		var t = setTimeout(getGreetings, 1000);
		    
		
	 	document.querySelector('h2').innerHTML = greeting;	
}

	getGreetings();

//Maak functie aan voor tijd en datum
function displayTime() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	// zet een 0 als de nummer lager dan 10 is 
		if(seconds < 10) {
			seconds ="0" + seconds;
		}
		if(minutes < 10) {
	   		minutes ="0" + minutes;
	   	}
		if(hours < 10) {
	   		hours ="0" + hours;
	   	}

	//Geeft de tijd door aan de clock id 
	var clock= document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds +" CEST";

	//Update de tijd elke 1000ms
	var t = setTimeout(displayTime, 1000);
   			}
   			
displayTime(); 

//Datum
var currentDate= new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();


	if(day < 10) {
			day ="0" + day;
		}
		if(month < 10) {
	   		month ="0" + month;
	   	}
		

//Geeft de datum door aan de date id
document.getElementById('date').innerHTML =  day + "/" + month+  "/" + year;


