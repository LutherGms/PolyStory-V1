function delta_luigi ()
{
		var s_3 = document.getElementById('delta');
		var cors_3 = "64";
			
			if (s_3.value == cors_3) {
				window.alert("Tu as trouvé delta !");
			}
			else { 
				window.alert("Faux ! ATTENTION : delta = b² - 4*a*c ");
			}
}

function delta_luigi_2 ()
{
		var s_3 = document.getElementById('delta');
		var cors_3 = "100";
			
			if (s_3.value == cors_3) {
				window.alert("Tu as trouvé delta !");
			}
			else { 
				window.alert("Faux ! ATTENTION : delta = b² - 4*a*c ");
			}
}

function delta_luigi_3 (){
var s_3 = document.getElementById('delta');
var cors_3 = "25";
	
	if (s_3.value == cors_3) {
		window.alert("Tu as trouvé delta !");
	}
	else { 
		window.alert("Faux ! ATTENTION : delta = b² - 4*a*c ");
	}
}


function clique_luigi(){
  var s_1 = document.getElementById('solution_2');
  var s_2 = document.getElementById('solution_3');
  
	
  var cors_1 = "-3";
  var cors_2 = "3";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			location.href="LUIGI.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	
function clique_luigi2(){
  var s_1 = document.getElementById('solution_2');
  var s_2 = document.getElementById('solution_3');
  
	
  var cors_1 = "-5/3";
  var cors_2 = "1";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			window.alert("Bravo, tu as trouvé les solutions ! Tu peux voir la suite de l'histoire");
			location.href="LUIGI_2.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	
function clique_luigi3(){
  var s_1 = document.getElementById('solution_2');
  var s_2 = document.getElementById('solution_3');
  
	
  var cors_1 = "-7";
  var cors_2 = "3";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			window.alert("Bravo, tu as trouvé les solutions ! Tu peux voir la suite de l'histoire");
			location.href="LUIGI_3.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	
function clique_luigi4(){
  var s_1 = document.getElementById('solution_2');
  var s_2 = document.getElementById('solution_3');
  
            
  
	
  var cors_1 = "-3";
  var cors_2 = "2";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			window.alert("BRAVO ! Tu as fini les niveaux !");
			location.href="BOWSER.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}	
	