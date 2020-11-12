// INIZZALIZZAZIONE VARIABILI
var name;

var lastName;

var color;

var password;


// DICHIARAZIONE VARIABILI CONTENITORE
var nameContainer = document.getElementById('name_container');

var colorContainer =
document.getElementById('color_container');

var passwordContainer =
document.getElementById('password_container');


// DICHIARAZIONE VARIABILI CON PROMPT
name = prompt('Qual è il tuo nome?');
lastName = prompt('Qual è il tuo cognome?');
color = prompt('Qual è il tuo colore preferito?');


// CONTENT IGNECTION
document.getElementById('name_container').innerHTML = name + ' ' + lastName;
document.getElementById('color_container').innerHTML = color;
document.getElementById('password_container').innerHTML = name + lastName + color + '20';
