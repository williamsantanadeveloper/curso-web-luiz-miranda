/*
Escapando caractere

let umaString = "Um \"texto\""
let umaString = "Um \texto" - remove o t
let umaString = "Um \\texto" - saída Um \texto

Strings são indexsadas
                 01234567
let umaString = 'Um texto';


console.log(umaString.charAt(6)); === console.log(umaString[6])
console.log(umaString.concat(' lindo dia', )); === console.log(umaString + 'lindo dia')
console.log(umaString.concat(' lindo dia', )); === console.log(`${umaString} em um lindo dia!`);


console.log(umaString.indexOf('texto')); - Procura onde começa a string texto / saída: 3
console.log(umaString.indexOf('Um', 3)); - Verifica se a string Um começa no indíce 3 / saída: -1
console.log(umaString.indexOf('o', 3)); - Verifica se a string o começa depois do índice 3 / saída: 7

console.log(umaString.lastIndexOf('o')); - Começa de trás pra frente
console.log(umaString.lastIndexOf('o')); - Verfica se a string o está atrás do índice 3 / saída: -1

UUtilizando expressões regulares
console.log(umaString.match(/[a-z]/g)); Retorna todas as letras de a até o t / saída: [ 'm', 't', 'e', 't', 'o' ]
Tem a opção de retornar sem o g console.log(umaString.match(/[a-z]/)); / saída: [ 'm', index: 1, input: 'Um texto', groups: undefined ]
console.log(umaString.search(/[a-z]/g)); Retorna que pedir no caso foi encontrado o m no índice 1
console.log(umaString.search(/x/)); / saída: 5
console.log(umaString.replace('Um', 'O')); troca elementos / saída: O texto


let umaString = 'O rato roeu a ropa do rei de roma.';

console.log(umaString.replace(/r/, /#/)); - Nesse caso só irá substituir o primeiro r caso queira que seja em todos os r's utilizar o g na expressão regular
console.log(umaString.replace(/r/g, /#/))

Fatiamento 
console.log(umaString.slice(2, 6)); Começa do dois e vai até o 5 (ele remove o último elemento) / saída: rato
Utilizando índices negativos
console.log(umaString.slice(-3)); / saída: oma === console.log(umaString.slice(32)); começa do 32 e vai até o final
console.log(umaString.slice(-5, -1)); começa do índice -5 pegue o inddíce -1 / saída: roma === console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split(' ')); retorna um array com os elementos separados pelo espaço / saída: ['O','rato','roeu','a','ropa','do','rei','de','roma.']
console.log(umaString.split('r')); remove a letra r / saída: [ 'O ', 'ato ', 'oeu a ', 'opa do ', 'ei de ', 'oma.' ]
console.log(umaString.split(' ', 2)); Vai receber dois resultados com o espaço / saída:  [ 'O', 'rato' ]
console.log(umaString.split(' ', 3)); Vai receber três resultados com o espaço / saída:  [ 'O', 'rato', 'roeu ]

console.log(umaString.toUpperCase()); todas as letras maiúsculas
console.log(umaString.toLowerCase()); '''' '''''''''' minúsculas
*/

