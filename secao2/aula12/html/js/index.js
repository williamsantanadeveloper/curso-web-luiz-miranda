// alert('Com a nossa mensagem.');
// confirm('Deseja realmente apagar?');
// prompt('Informe seu nome');

let num1 = prompt('Informe um número: ');
let num2 = prompt('Informe outro número: ');

num1 = Number(num1)
num2 = Number(num2)

const sum = alert(`O resultado foi ${num1 + num2}`);
const s = alert(`O resultado foi ${num1 - num2}`);
const m = alert(`O resultado foi ${num1 * num2}`);
const d = alert(`O resultado foi ${num1 / num2}`);
const r = alert(`O resultado foi ${Math.round(num1 % num2)}`);
const e = alert(`O resultado foi ${Math.pow(num1, num2)}`)