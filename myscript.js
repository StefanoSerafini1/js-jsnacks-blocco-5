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


//jsnack 3
//Creiamo un array di oggetti
//Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova
// proprietà position che contiene una lettera casuale.
//Non dobbiamo modificare l'array iniziale.

//1° array
var macchine = [
    {
        name: 'Ferrari',
        color: 'rosso'
    },
    {
        name: 'Mercedes',
        color: 'argento'
    },
    {
        name: 'Bmw',
        color: 'nera'
    },
    {
        name: 'Audi',
        color: 'bianca'
    }
];

var macchineDue = [];
//copia primo nel secondo con creazione nuovo campo
for (var i = 0; i < macchine.length; i++) {
    var copiaArray = {
        name: macchine[i].name,
        color: macchine[i].color,
        codice: randomLetters()
    };

    macchineDue.push(copiaArray);//mettere nel secondo array l'array copiato
};

console.table(macchine);

console.table(macchineDue);

//funzione per creare lettere random e assegnarne una usando anche random numbers per sceglierla tra le possibili
function randomLetters() {
    var letterepossibili = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lettera = letterepossibili[randomNumbers(0, letterepossibili.length - 1)];
    return lettera;
}
function randomNumbers(min,max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}
