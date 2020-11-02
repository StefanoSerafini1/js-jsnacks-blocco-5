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
