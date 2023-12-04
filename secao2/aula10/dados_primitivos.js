const name = 'William'; // String
const name1 = "William"; // String
const name2 = `William`; // String

const number1 = 10; // Number
const number2 = 10.52; // Number

let nameStudent; // undefined - não aponta para nenhum local na memória
let surname = null; // Nulo -> não aponta para nenhum local na memória

const approved = true; // Boolean = true, false
const reproved = false;

console.log(typeof reproved);
console.log(typeof name1, name1); // tipo e valor
console.log(typeof nameStudent, surname);


let a = 2;
let b = a;
console.log(a, b);
a = 3;
console.log(a, b);


// Exemplo de dado de referência
const array = [1, 2];
const array2 = array;

console.log(array, array2);

array2.push(3);

console.log(array, array2);
