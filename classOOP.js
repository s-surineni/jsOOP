class Person {
    // declaring these properties before constructor is optional
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}

let jim = new Person('Jim', 'Smith', 18);
console.log(jim);
console.log(jim.isAdult());