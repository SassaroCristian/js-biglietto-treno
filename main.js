let distance = parseFloat(prompt('Inserisci la distanza che devi percorrere'));
let age = parseInt(prompt('Inserisci la tua età'));

const priceOneKilometer = 0.21;
let priceKilometer = distance * priceOneKilometer;

const under18sale = priceKilometer * 0.20; 
const over65sale = priceKilometer * 0.40; 

const totalPrice = document.getElementById('prezzo');
const salePrice = document.getElementById('prezzoScontato');

if (age < 18) {
    totalPrice.textContent = `Prezzo intero ${priceKilometer}`;
    salePrice.textContent = `Prezzo scontato del 20% ${(priceKilometer - under18sale).toFixed(2)}`;
} else if (age >= 18 && age < 65) {
    totalPrice.textContent = `Spenderai ${priceKilometer}`;
} else if (age >= 65) {
    totalPrice.textContent = `Prezzo intero ${priceKilometer}`;
    salePrice.textContent = `Prezzo scontato del 40% ${(priceKilometer - over65sale).toFixed(2)}`;
}

