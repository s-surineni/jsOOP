class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.enrolledCourses = [];
    }
    isAdult() {
        this.age >= 21;
    }
}