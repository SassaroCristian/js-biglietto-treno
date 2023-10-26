let distance = prompt('Inserisci la distanza che devi percorrere')
let age = prompt('Inserisci la tua età')

const priceOneKilometer = 0.21

let priceKilometer = distance * priceOneKilometer

const under18sale = priceOneKilometer * 20 / 100
console.log(under18sale);

const over65sale = priceOneKilometer * 40 / 100
console.log(over65sale);



const totalPrice = document.getElementById('prezzo').innerHTML = `<h3>Spenderai ${priceKilometer}</h3>`
const salePrice = document.getElementById('prezzoScontato')


if (age < 18) {
    salePrice.innerHTML = `<h3>Spenderai ${under18sale.toFixed(2)}</h3>`
} else if (age >= 18 && age < 65){
    totalPrice.innerHTML = `<h3>Spenderai ${priceKilometer.toFixed(2)}</h3>`
} else {
    salePrice.innerHTML = `<h3>Spenderai ${over65sale.toFixed(2)}</h3>`
}

