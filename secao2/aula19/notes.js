/*
Funções - executam ações

Maneiras para criar uma função
1º
function soma(){
    return 
}
2º const soma = function() {
    return
};

3º const soma = () => {
    return
};

4º const soma = n => n ** 0.5; - somente quando existe um parâmetro

function saduation(string) {
};
saduation()

Saída Bom dia!
function saduation() {
    console.log('Bom dia!');
};

saduation();

Adicinando parâmetros
function saduation(name) {
    console.log(`Bom dia ${name}!`);
};

saduation('William');

Retornando valores
function saduation(name) {
    return `Bom dia ${name}!`
};

saduation('William');

const variable = saduation('William');

console.log(variable);

function saduation(name) {
    console.log(`Bom dia ${name}!`);
    return 123456
};

const variable = saduation('William');

console.log(variable); saída - Bom dia William! 123456


function sum(x, y) {
    const result = x + y;
    return result;
};

console.log(sum(1, 2));
console.log(sum(1, 23));
console.log(sum(11, 2));

Caso valores não sejam passados para x ou y esses valores vão ser trocados por 1 e 1 respectivamente
function sum(x = 1, y = 1) {
    const result = x + y;
    return result;
};

const result = sum(10, 22);
console.log(result);

*/