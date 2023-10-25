const name = 'William Batista';
const surname = ' Andrade';
let age = 18;
let weight = 95;
let height = 1.73;
let imc = weight / Math.pow(height, 2);
let year_of_birth = 2023 - age;

// + 
// template strings

console.log(`${name}`, surname.concat('tem'), age + ' anos, pesa ' + weight + ' kg' + ' tem ' + height + ' de altura e seu IMC é de ' + Math.round(imc, 2) + ` ele nasceu no ano em ` + year_of_birth);