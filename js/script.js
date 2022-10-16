/*
**Mail**

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const utente = ["mail@mail.com", "mail@mail.it", "mail@mail.co.uk"];
//console.log(utente);
//console.log(utente.includes("@"))

const utenteEmail = prompt ("Inserisci Email");
//console.log(utenteEmail);

let utenteErrato = false;
//console.log(utenteErrato);


/*
**Gioco dei dadi**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/


//Formula numero random da 1 a 6
let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;

console.log(x);
console.log(y);

//Funzione che dichiara il vincitore
if (x == y) {
    console.log("Try Again")
} else if (x > y) {
    console.log("Player Wins")
} else {
    console.log("Player Lost")
};

