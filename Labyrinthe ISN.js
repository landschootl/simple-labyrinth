//==========================================================================================================================================================================================//
//==========================================================================================================================================================================================//
//==========================================================================================================================================================================================//
//==========================================================================================================================================================================================//
//=================================         Style du Labytinthe       ======================================================================================================================//
var CJ1 = "red";
var CJ2 = "White" ;
var Trace1 = "white";
var Trace2 = "White";

var setupEvents = function() {
    // gestion événement pour piedDePage
	var B1 =  document.getElementById("Button1");
    B1.addEventListener("click",action1);
}

window.addEventListener("load", setupEvents);

// ==================================================

// définition des fonctions

function action1() { //Configurer le bouton

var Val1 = document.getElementById("1J").value;
CJ1 = Val1;

var Val2 = document.getElementById("2J").value;
CJ2 = Val2;

var Val3 = document.getElementById("Trace1").value;
Trace1 = Val3;

var Val4 = document.getElementById("Trace2").value;
Trace2 = Val4;

if(document.getElementById('OneJoueur').checked){

document.getElementById("0,2").style.backgroundColor = "White" //position départ joueur1
document.getElementById("f0,2").color="White" //position départ joueur1

document.getElementById("0,3").style.backgroundColor = CJ1 //position départ joueur1
document.getElementById("f0,3").color=CJ1 //position départ joueur1
document.form.positionX.value = 3 //position départ joueur1
document.form.positionY.value = 0 //position départ joueur1

document.getElementById("0,4").style.backgroundColor = "White" //position départ joueur2
document.getElementById("f0,4").color="White" //position départ joueur2
document.form.positionT.value = 0 //position départ joueur2
document.form.positionS.value = 0 //position départ joueur2

}

if(document.getElementById('TwoJoueurs').checked){

document.getElementById("0,2").style.backgroundColor = CJ1 //position départ joueur1
document.getElementById("f0,2").color=CJ1 //position départ joueur1
document.form.positionX.value = 2 //position départ joueur1
document.form.positionY.value = 0 //position départ joueur1

document.getElementById("0,4").style.backgroundColor = CJ2 //position départ joueur2
document.getElementById("f0,4").color=CJ2 //position départ joueur2
document.form.positionT.value = 4 //position départ joueur2
document.form.positionS.value = 0 //position départ joueur2

document.getElementById("0,3").style.backgroundColor = "White" //position départ joueur1
document.getElementById("f0,3").color="White" //position départ joueur1

}

}






//======================================================================================================================================================================================//
//==============================================        Labyrinthe  Tableau      =======================================================================================================//


document.onkeyup = function(event) { //bouger avec les fleches
if (event.keyCode == 37) { //bouger Gauche             Joueur 1
  move(4)
  }
else if (event.keyCode == 38) { //bouger haut
  move(3)
  }
else if (event.keyCode == 39) { //bouger droite
  move(2)
  }
else if (event.keyCode == 40) { //bouger bas
  move(1)
  } 
else if (event.keyCode == 81) { //bouger Gauche            Joueur 2
  nove(4)
  }
else if (event.keyCode == 90) { //bouger haut
  nove(3)
  }
else if (event.keyCode == 68) { //bouger droite
  nove(2)
  }
else if (event.keyCode == 83) { //bouger bas
  nove(1)
  }
}

positionFin = "21,36"; //position fin

function départ() //position des joueurs au départ
{
créemur()

document.getElementById("0,3").style.backgroundColor = CJ1 //position départ joueur1
document.getElementById("f0,3").color= CJ1 //position départ joueur1
document.form.positionX.value = 3 //position départ joueur1
document.form.positionY.value = 0 //position départ joueur1

document.getElementById("0,4").style.backgroundColor = CJ2 //position départ joueur2
document.getElementById("f0,4").color= CJ2 //position départ joueur2
document.form.positionT.value = 0 //position départ joueur2
document.form.positionS.value = 0 //position départ joueur2

document.getElementById(positionFin).style.backgroundColor = "#FF00FF" //Position fin
document.getElementById("f"+positionFin).color = "#FF00FF" //position fin
}

function move(e) // joueur 1
{
y = document.form.positionY.value*1 // Il récupère la variable positon Y de la page html.
x = document.form.positionX.value*1 // Il récupère la variable positon X de la page html.
if (e == 1 && check(y+1,x))  // Si il a cliqué sur le bouton "s", et si la case est accésible grace à la function "check", lancer la fonction Afficher.
{
afficher(y+1,x)
}
else if (e == 2 && check(y,x+1))  // Si il a cliqué sur le bouton "d", et si la case est accésible grace à la function "check", lancer la fonction Afficher.
{
afficher(y,x+1)
}
else if (e == 3 && check(y-1,x))  // Si il a cliqué sur le bouton "z", et si la case est accésible grace à la function "check", lancer la fonction Afficher.
{
afficher(y-1,x)
}
else if (e == 4 && check(y,x-1))   // Si il a cliqué sur le bouton "q", et si la case est accésible grace à la function "check", lancer la fonction Afficher.
{
afficher(y,x-1)
}
}
function nove(e) // joueur 2
{
s = document.form.positionS.value*1
t = document.form.positionT.value*1
if (e == 1 && chesk(s+1,t))    // Si il a cliqué sur la fleche du bas, et si la case est accésible grace à la function "chesk", lancer la fonction Afficher.
{
affiché(s+1,t)
}
else if (e == 2 && chesk(s,t+1))   // Si il a cliqué sur la fleche du bas, et si la case est accésible grace à la function "chesk", lancer la fonction Afficher.
{
affiché(s,t+1)
}
else if (e == 3 && chesk(s-1,t))   // Si il a cliqué sur la fleche du bas, et si la case est accésible grace à la function "chesk", lancer la fonction Afficher.
{
affiché(s-1,t)
}
else if (e == 4 && chesk(s,t-1))   // Si il a cliqué sur la fleche du bas, et si la case est accésible grace à la function "chesk", lancer la fonction Afficher.
{
affiché(s,t-1)
}
}

function check(Y,X) //joueur1     Vérifie si il n'y a pas de mur.
{
if (document.getElementById(Y+","+X)) return true   // Si il n'y a pas de mur, continuer la function et donc lance la function Afficher.
else return false // Sinon arrêter la function.
}
function chesk(Y,X) //joueur2     Vérifie si il n'y a pas de mur.
{
if (document.getElementById(Y+","+X)) return true   // Si il n'y a pas de mur, continuer la fonction et donc lance la function Afficher.
else return false // Sinon arrêter la function.
}

function afficher(Y,X) //joueur1     Affiche le carré du joueur.
{
effacer(document.form.positionY.value,document.form.positionX.value)  // Lance la function Effacer. Il récupère la position X et Y pour la function.
document.getElementById(Y+","+X).style.backgroundColor = CJ1  // Il récupère les nouvelles données et change la couleur de la case.
document.getElementById("f"+Y+","+X).color=CJ1  // Il récupère les nouvelles données et change la couleur de l'écriture sur la case d'ou "---".
document.form.positionX.value = X   // Et il affecte la nouvelle valeur de la position à l'hidden PositionX.
document.form.positionY.value = Y   // Et il affecte la nouvelle valeur de la position à l'hidden PositionY.
vérifier()  // Lance la fonction vérifier qui sert à voir si le joueur est arrivé sur la case d'ariver ou pas.
}
function affiché(Y,X) //joueur2     Affiche le carré du joueur.
{
effacé(document.form.positionS.value,document.form.positionT.value)   // Lance la function Effacer. Il récupère la position S et T pour la function.
document.getElementById(Y+","+X).style.backgroundColor = CJ2  // Il récupère les nouvelles données et change la couleur de la case.
document.getElementById("f"+Y+","+X).color=CJ2   // Il récupère les nouvelles données et change la couleur de l'écriture sur la case d'ou "---".
document.form.positionT.value = X   // Et il affecte la nouvelle valeur de la position à l'hidden PositionT.
document.form.positionS.value = Y   // Et il affecte la nouvelle valeur de la position à l'hidden PositionS.
vérifié()   // Lance la fonction vérifié qui sert à voir si le joueur est arrivé sur la case d'ariver ou pas.
}

function effacer(Y,X) //joueur1
{
document.getElementById(Y+","+X).style.backgroundColor = Trace1  // Récupère les positions du joueur et change la couleur de l'écriture de la case en blanc.
document.getElementById("f"+Y+","+X).color = Trace1  // Récupère les positions du joueur et change la couleur de l'écriture de la case en blanc.
}
function effacé(Y,X) //joueur2
{
document.getElementById(Y+","+X).style.backgroundColor = Trace2   // Récupère les positions du joueur et change la couleur de l'écriture de la case en blanc.
document.getElementById("f"+Y+","+X).color = Trace2  // Récupère les positions du joueur et change la couleur de l'écriture de la case en blanc.
}

function créemur(){ //Mur du labyrinthe
position = new Array("0,0","9,0","2,1","4,1","6,1","7,1","8,1","9,1","11,1","13,1","15,1","16,1","17,1","19,1","20,1","1,2","4,2","6,2","11,2","13,2","17,2","17,2","1,3","3,3","4,3","6,3","8,3","9,3","10,3","14,3","15,3","19,3","21,3","1,4","3,4","6,4","8,4","12,4","17,4","19,4","5,5","8,5","10,5","11,5","13,5","14,5","16,5","19,5","20,5","0,6","1,6","3,6","5,6","7,6","10,6","18,6","20,6","2,7","7,7","9,7","12,7","13,7","14,7","15,7","16,7","17,7","20,7","0,8","4,8","6,8","7,8","10,8","12,8","19,8","0,9","1,9","2,9","3,9","8,9","12,9","14,9","15,9","17,9","18,9","21,9","5,10","6,10","9,10","10,10","14,10","17,10","20,10","1,11","2,11","4,11","5,11","7,11","10,11","12,11","13,11","17,11","19,11","21,11","2,12","8,12","12,12","15,12","16,12","17,12","19,12","21,12","0,13","2,13","4,13","5,13","6,13","8,13","10,13","11,13","14,13","21,13","2,14","4,14","6,14","13,14","16,14","18,14","19,14","1,15","4,15","7,15","8,15","9,15","11,15","12,15","15,15","17,15","18,15","20,15","5,16","11,16","14,16","18,16","20,16","1,17","2,17","3,17","5,17","7,17","8,17","9,17","11,17","13,17","16,17","20,17","2,18","5,18","7,18","11,18","13,18","15,18","17,18","19,18","0,19","4,19","7,19","9,19","10,19","11,19","13,19","15,19","19,19","21,19","0,20","1,20","2,20","6,20","9,20","11,20","15,20","17,20","19,20","4,21","6,21","8,21","11,21","12,21","13,21","14,21","19,21","20,21","1,22","2,22","3,22","8,22","10,22","16,22","17,22","19,22","3,23","5,23","6,23","7,23","10,23","12,23","13,23","14,23","15,23","19,23","21,23","0,24","1,24","3,24","9,24","12,24","17,24","18,24","21,24","1,25","4,25","6,25","8,25","11,25","14,25","15,25","16,25","20,25","2,26","6,26","8,26","10,26","13,26","17,26","19,26","0,27","4,27","5,27","8,27","10,27","11,27","13,27","14,27","15,27","21,27","1,28","2,28","3,28","7,28","11,28","17,28","18,28","20,28","5,29","6,29","9,29","11,29","13,29","15,29","16,29","18,29","20,29","0,30","2,30","4,30","8,30","11,30","13,30","16,30","18,30","2,31","6,31","9,31","10,31","13,31","14,31","16,31","19,31","20,31","1,32","3,32","4,32","7,32","8,32","12,32","14,32","18,32","20,32","5,33","7,33","10,33","11,33","15,33","16,33","17,33","4,35","6,35","7,35","9,35","11,35","12,35","13,35","14,35","16,35","18,35","1,36","2,36","6,36","9,36","13,36","16,36","18,36","20,36","0,37","2,37","3,37","4,37","5,37","8,37","11,37","13,37","15,37","18,37","21,37","7,38","10,38","13,38","15,38","17,38","19,38","1,39","2,39","3,39","4,39","5,39","6,39","9,39","10,39","12,39","15,39","17,39","19,39","20,39","8,40","14,40","0,34","1,34","3,34","7,34","9,34","13,34","18,34","19,34","20,34","21,34");
pos = position; //La variable pos prend la valeur de la variable position.

for (i=0;i<position.length;i++) //Lenght contient le nombre d'éléments d'un tableau.
{
pos[i] = pos[i].split(",") // split() permet de scinder une chaîne de caractère et de retourner les résultats dans un tableau, grâce à une chaîne définie comme séparateur. 
if (check(pos[i][0],pos[i][1]))
{
document.getElementById(position[i]).style.backgroundColor = "GoldenRod" //couleur mur
document.getElementById("f"+position[i]).color = "GoldenRod" //couleur mur
document.getElementById(position[i]).id = ""
}
}
}

function vérifier() //joueur1
{
if (document.form.positionY.value+","+document.form.positionX.value == positionFin)   // Si le Hidden positionX et positionY sont égaux à la variable positionFin alors continuer.
{
alert("Joueur1 gagné");  // Message qui indique que le joueur 1 à gagner.
positionFin = ",";  // Enlève la position Fin.
}
}
function vérifié() //joueur2
{
if (document.form.positionS.value+","+document.form.positionT.value == positionFin)  // Si le Hidden positionS et positionT sont égaux à la variable positionFin alors continuer.
{
alert("Joueur2 gagné");   // Message qui indique que le joueur 2 à gagner.
positionFin = ",";   // Enlève la position Fin.
}
}

hauteur = 22  // Indique la hauteur du tableau.
largeur = 41  // Indique la largeur du tableau.
color = "FFFFFF" //couleur fond
code ="<TABLE border='20'><TR>"
for (i=0;i<largeur+2;i++)
{
code+="<TD bgcolor='000000'></TD>" //couleur bordure du haut.
}
code+="</TR>"
for (i=0;i<hauteur;i++)
{
code +="<TR><TD bgcolor='000000'></TD>" //couleur bordure de gauche.

for (x=0;x<largeur;x++) // Permet de former et mettre en couleur les cases.
{
code += "<TD id='"+i+","+x+"' bgcolor='"+color+"'><FONT color='"+color+"' id='f"+i+","+x+"'>---</FONT></TD>" //bg color = la couleur de fond des cases et FONT color = la couleur de l'écriture dans les cases.
}

code+="<TD bgcolor='000000'></TD></TR>"  //couleur bordure de droite.
}
code+="<TR>"
for (i=0;i<largeur+2;i++)
{
code+="<TD bgcolor='000000'></TD>"  //couleur bordure du bas.
}
code+="</TR>"//
code+="</TABLE>"
document.write(code)
document.form.hauteur.value = hauteur // La variable hauteur prend pour valeur la valeur du Hidden hauteur.
document.form.largeur.value = largeur // La variable largeur prend pour valeur la valeur du Hidden largeur.
