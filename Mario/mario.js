function clique_mario(){
  var s_1 = document.getElementById('solution');
  var s_2 = document.getElementById('solution_1');
  
  
	
  var cors_1 = "-2";
  var cors_2 = "2";
 
  
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			location.href="MARIO.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	

	
function clique_mario2(){
  var s_1 = document.getElementById('solution');
  var s_2 = document.getElementById('solution_1');
  
	
  var cors_1 = "-2";
  var cors_2 = "-1";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			window.alert("Bravo, tu as trouvé les solutions ! Tu peux voir la suite de l'histoire");
			location.href="MARIO_2.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	
function clique_mario3(){
  var s_1 = document.getElementById('solution');
  var s_2 = document.getElementById('solution_1');
  
	
  var cors_1 = "1";
  var cors_2 = "3";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			window.alert("Bravo, tu as trouvé les solutions ! Tu peux voir la suite de l'histoire");
			location.href="MARIO_3.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	
function clique_mario4(){
  var s_1 = document.getElementById('solution');
  var s_2 = document.getElementById('solution_1');
  
	
  var cors_1 = "-4";
  var cors_2 = "0";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			window.alert("Bravo ! Niveau suivant.");
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
	

