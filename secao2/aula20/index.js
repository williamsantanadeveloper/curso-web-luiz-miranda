const createPerson = (name, surname, age) => {
    return {
        name,
        surname,
        age
    };
};

const person1 = createPerson('Luiz', 'Otávio', 25);
const person2 = createPerson('William', 'Santana', 25);
const person3 = createPerson('Luiz', 'Otávio', 25);
const person4 = createPerson('Luiz', 'Otávio', 25);
const person5 = createPerson('Luiz', 'Otávio', 25);
// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);


const person = {
    name: 'William',
    surname: 'Santana',
    age: 18,

    speak() {
        console.log(`${this.name} ${this.surname} está falando oi..., ${this.age}`);
    },

    incrementoAge() {
        this.age++;
    }
};

person.speak();
person.incrementoAge();
person.speak();
person.incrementoAge();
person.speak();
person.incrementoAge();
person.speak();
person.incrementoAge();
person.speak();
person.incrementoAge();
person.speak();
person.incrementoAge();
