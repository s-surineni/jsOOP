class Person {
    static adultAge = 18;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    static isAdult(age) {
        return age >= Person.adultAge;
    }

    isAdult() {
        return Person.isAdult(this.age);
    }
}
let jim = new Person('Jim', 'Smith', 18);
console.log(jim.fullName);
jim.fullName = 'Kris Smith';
console.log(jim.fullName);
console.log(jim.isAdult());
console.log(Person.isAdult(17));