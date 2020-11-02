//jsnack1
//Creare un array di oggetti
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore con handlebars.
var biciclette = [
        {
            name: 'Speed',
            peso: 8
        },
        {
            name: 'Mountain',
            peso: 7
        },
        {
            name: 'Triathlon',
            peso: 6
        },
    ];
//contollo pesi per assegnazione
    var pesi = [];
    for (var i = 0; i < biciclette.length; i++) {
        var chiave = biciclette[i];
        pesi.push(biciclette[i]['peso']);
    }
//peso controllo
    var sortp = pesi.sort();

    for (var i = 0; i < biciclette.length; i++) {
        var chiave = biciclette[i];
//controllo e stampa del nome  e peso bici più leggero
        if (chiave['peso'] == pesi[0]) {
            console.log(chiave.name + ' ' + chiave.peso);
        }
    }

//jsnack 2
//Partendo da un array di nomi,Chiedere due numeri all'utente per definire la posizione iniziale e finale
//Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)
//compresa tra i due numeri inseriti dall'utente.
var nomi = [
   {
       nome:'Stefano',
   },
   {
       nome:'Andrea',
   },
   {
       nome:'Mattia',
   },
   {
       nome:'Luca',
   },
   {
       nome:'Giacomo',
   },
   {
       nome:'Riccardo',
   }
]

 var controllo = [];
//richiesta e controllo valore inserito
 var numUno = parseInt(prompt("Digitare un numero da 0 a 5"));
 if (numUno > 5) {
   var numUno = parseInt(prompt("Digitare un numero da 0 a 5"));
 }
 var numDue = parseInt(prompt("Digitare un numero da 0 a 5"));
 if (numDue > 5) {
   var numDue=parseInt(prompt("Digitare un numero da 0 a 5"));
 }
//funz slice per inserimento nomi in controllo
     controllo.push(nomi.slice(numUno,numDue));
//stampa nuovo array
     console.log(controllo);
