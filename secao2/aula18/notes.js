/* 

Arrays é uma lista de coisas

Exemplo
let students = ['Luiz', 'Maria', 'João'];

Sempre que possível ultilizar só um tipo de dado no array

let students = ['Luiz', 'Maria', 'João']; -> recomendado
let students = ['Luiz', 'Maria', 'João', 1, null]; -> não recomendado

Os arrays também são indexados, ou seja, tem indices

              0123456
const name = 'William'
                  0       1        2
let students = ['Luiz', 'Maria', 'João'];

Acessando elementos
                  0       1        2
let students = ['Luiz', 'Maria', 'João'];

console.log(students[0]); saída: Luiz

Modificando array
let students = ['Luiz', 'Maria', 'João'];
students[0] = 'Eduardo' Altera

console.log(students)
console.log(students[0]);
console.log(students[2])

Adicionando elementos no array
----------------------------------------
let students = ['Luiz', 'Maria', 'João'];
students[0] = 'Eduardo';
students[3] = 'Luiza';
console.log(students);
----------------------------------------
let students = ['Luiz', 'Maria', 'João'];
students[students.length] = 'Fabio'; Adiciona
students[students.length] = 'Luana'; Adiciona
students[students.length] = 'Luiza'; Adiciona

console.log(students);
----------------------------------------
Melhor maneira para adicionar/remover elementos 

push - Adiciona o elemento no último indice
unshift - Adiciona o elemento no indice 0
shift - remove o primeiro indice
pop - remove o ultimo indice
let students = ['Luiz', 'Maria', 'João'];
students.push('Otávio');
students.unshift('Fabio');
studentes.shift()

console.log(students);
Armazenando o aluno removido em uma variável
const studentRemove = students.pop();
const studentRemove = students.shift();

Deletando um elemento no array

delete students[1] saída: [ 'Luiz', <1 empty item>, 'João' ]
Deixa o indice vazio, os indices não irão se modificar

Acessando valores que não existem
let students = ['Luiz', 'Maria', 'João'];

console.log(students[50]); saída: undefined

Fatiando os arrays
let students = ['Luiz', 'Maria', 'João'];

students.push('Luiza');
students.push('Eduardo');

console.log(students.slice(0, 5));

Verificando o que é o tipo do array

console.log(typeof (students)); - Object

Verificando se eu estou manipulando mesmo um array

console.log(students instanceof Array); - true
console.log(students instanceof Object); - true

Verificando tamanho do array
let students = ['Luiz', 'Maria', 'João'];
console.log(students.length); saída: 3

*/