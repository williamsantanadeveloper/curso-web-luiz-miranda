let number = prompt('Enter a number: '); // ou let number = Number(prompt('Enter a number: '));
let numberConverted = Number(number)
let numberTitle = document.getElementById('number-title');
let text = document.getElementById('texto');


numberTitle.innerHTML = number;
text.innerHTML = `
<p>Seu número é ${number}</p> <br>
<p>A raíz quadrada do seu número é ${Math.sqrt(numberConverted)}</p> <br>
<p>${numberConverted} é inteiro? ${Number.isInteger(numberConverted)} </p> <br>
<p>${numberConverted} é NaN? ${Number.isNaN(numberConverted)} </p> <br>
<p>Arredondando para baixo: ${Math.floor(numberConverted)} </p> <br>
<p>Arredondando para cima: ${Math.ceil(numberConverted)} </p> <br>
<p>Com duas casas decimais ${numberConverted.toFixed(2)} </p> <br>
`;