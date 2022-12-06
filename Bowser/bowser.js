function dérivée_bowser ()
{
		var s_1 = document.getElementById('dérivée');
		var cors_1 = "2z - 2";
			
			if (s_1.value == cors_1) {
				window.alert("Tu as trouvé la dérivée !");
			}
			else { 
				window.alert("Faux ! ");
			}
}

function delta_bowser ()
{
		var s_3 = document.getElementById('delta');
		var cors_3 = "-64";
			
			if (s_3.value == cors_3) {
				window.alert("Tu as trouvé delta !");
			}
			else { 
				window.alert("Faux ! ATTENTION : delta = b² - 4*a*c ");
			}
}

function delta_bowser2 ()
{
		var s_3 = document.getElementById('delta');
		var cors_3 = "-1600";
			
			if (s_3.value == cors_3) {
				window.alert("Tu as trouvé delta !");
			}
			else { 
				window.alert("Faux ! ATTENTION : delta = b² - 4*a*c ");
			}
}

function delta_bowser3 ()
{
		var s_3 = document.getElementById('delta');
		var cors_3 = "-4";
			
			if (s_3.value == cors_3) {
				window.alert("Tu as trouvé delta !");
			}
			else { 
				window.alert("Faux ! ATTENTION : delta = b² - 4*a*c ");
			}
}

function clique_bowser(){
  var s_1 = document.getElementById('solution_4');
  var s_2 = document.getElementById('solution_5');
  
	
  var cors_1 = "-1";
  var cors_2 = "1";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
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
function clique_bowser2(){
  var s_1 = document.getElementById('solution_4');
  var s_2 = document.getElementById('solution_5');
  var sound = document.getElementById("beep");
	
  var cors_1 = "1+2i";
  var cors_2 = "1-2i";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			sound.play()
			window.alert("Bravo, tu as trouvé les solutions ! Tu peux voir la suite de l'histoire");
			location.href="BOWSER_2.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
function clique_bowser3(){
  var s_1 = document.getElementById('solution_4');
  var s_2 = document.getElementById('solution_5');
  var sound = document.getElementById("beep");
  
	
  var cors_1 = "10-20i";
  var cors_2 = "10+20i";
	
	if (s_1.value == cors_1) {
		if (s_2.value == cors_2) {
			sound.play()
			window.alert("Bravo, tu as trouvé les solutions ! Tu peux voir la suite de l'histoire");
			location.href="BOWSER_3.html";
		}
		else {
		window.alert("Faux ! Essaies encore..");
		}
	}	
	else {
		window.alert("Faux ! Essaies encore..");
		} ;
	}
	
function clique_bowser4(){

}
