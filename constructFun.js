function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
let jim = new Person('Jim', 'Smith', 18);
console.log(jim);

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}
jim = new Person('Jim', 'Smith', 18);
console.log(jim.hasOwnProperty('fullName'));
let kris = {
    firstName: 'Kris',
    lastName: 'Smith',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(kris.fullName);
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype = {
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}