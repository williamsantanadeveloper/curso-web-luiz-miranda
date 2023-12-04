let number = prompt('Enter a number: '); // ou let number = Number(prompt('Enter a number: '));
let numberTransform = Number(number)
let squareRoot = Math.sqrt(numberTransform);

document.body.innerHTML = `<h1>Your number is ${numberTransform} </h1> <br>`;
document.body.innerHTML += `Square root of ${numberTransform} is ${squareRoot} <br>`;
document.body.innerHTML += `${numberTransform} is integer? ${Number.isInteger(numberTransform)} <br>`;
document.body.innerHTML += `${numberTransform} is NaN? ${Number.isNaN(numberTransform)} <br>`;
document.body.innerHTML += `Rouding down: ${Math.floor(numberTransform)} <br>`;
document.body.innerHTML += `Rouding up: ${Math.ceil(numberTransform)} <br>`;
document.body.innerHTML += `With two decimal places ${numberTransform.toFixed(2)}`