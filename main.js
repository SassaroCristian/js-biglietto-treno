// L'utente inserisce la distanza che deve percorrere tramite un prompt.
let distance = parseFloat(prompt('Inserisci la distanza che devi percorrere'));

// L'utente inserisce la sua età tramite un prompt.
let age = parseInt(prompt('Inserisci la tua età'));

// CALCOLO COSTO

// Costo fisso per chilometro.
const priceOneKilometer = 0.21;

// Calcoliamo il costo totale del viaggio moltiplicando la distanza per il costo per chilometro.
let priceKilometer = distance * priceOneKilometer;

// CALCOLO SCONTISTICA

// Calcoliamo lo sconto del 20% basato sul costo del viaggio.
const under18sale = priceKilometer * 0.20;

// Calcoliamo lo sconto del 40% basato sul costo del viaggio.
const over65sale = priceKilometer * 0.40;

// Selezione degli elementi HTML

// Recuperiamo l'elemento HTML con ID "prezzo" per visualizzare il prezzo del viaggio.
const totalPrice = document.getElementById('prezzo');

// Recuperiamo l'elemento HTML con ID "prezzoScontato" per visualizzare il prezzo scontato (se applicabile).
const salePrice = document.getElementById('prezzoScontato');

// Verifichiamo l'età dell'utente per determinare se è idoneo per uno sconto.

// Se l'età è inferiore a 18 anni:
if (age < 18) {
    // Mostriamo il prezzo intero e il prezzo scontato del 20%.
    totalPrice.textContent = `Prezzo intero ${priceKilometer}$`;
    salePrice.textContent = `Prezzo scontato del 20% ${(priceKilometer - under18sale).toFixed(2)}$`;
}
// Altrimenti, se l'età è maggiore o uguale a 18 e minore di 65 anni:
else if (age >= 18 && age < 65) {
    // Mostriamo il prezzo completo senza sconti.
    totalPrice.textContent = `Spenderai ${priceKilometer} $`;
}
// Altrimenti, se l'età è maggiore o uguale a 65 anni:
else if (age >= 65) {
    // Mostriamo il prezzo intero e il prezzo scontato del 40%.
    totalPrice.textContent = `Prezzo intero ${priceKilometer}`;
    salePrice.textContent = `Prezzo scontato del 40% ${(priceKilometer - over65sale).toFixed(2)}$`;
}
// Se l'età non è stata riconosciuta come valida (non è un numero):
else {
    // Mostriamo un messaggio di errore.
    totalPrice.textContent = `ERRORE: I dati inseriti non sono numerici`;
}
