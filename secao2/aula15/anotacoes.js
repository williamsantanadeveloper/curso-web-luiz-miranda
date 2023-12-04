/*

let number1 = 1; // number
let number2 = 2.5; // number

console.log(number1.toString() + number2); 
Com o método toString está modificando o number para uma string
number1 = number1.toString();
console.log(typeof number1);

Transformando um number em binário number1 = 1500
console.log(number1.toString(2)); saída - 10111011100

Arredondando números 
console.log(number1.toFixed(2));
Método toFixed

Verificando se o número é inteiro
console.log(Number.isInteger(number1));

Verificando se o número é um número (NaN)
let temp = number1 * 'Olá';
console.log(Number.isNaN(temp));


IEEE 754-2008

let number1 = 0.7; // number
let number2 = 0.1; // number

console.log(number1 + number2); - saída: 0.799999999999

Corrigindo esse erro

number1 += number2; // 0.8
number1 += number2; // 0.9
number1 += number2; // 1.0
number1 += number2; // 1.1
number1 += number2; // 1.2
number1 += number2; // 1.3
number1 += number2; // 1.4
number1 += number2; // 1.5
number1 += number2; // 1.6
number1 += number2; // 1.7
number1 += number2; // 1.8
number1 += number2; // 1.9
number1 += number2; // 2.0

number1 = Number(number1.toFixed(2))

console.log(number1);
console.log(Number.isInteger(number1));

Outra maneira 
let number1 = 0.7; // number
let number2 = 0.1; // number

number1 = ((number1 * 100) + (number2 * 100)) / 100; // 0.8
*/