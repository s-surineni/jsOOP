class Person {
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
}

class Student extends Person {
    courses = [];
    enrollCourse(course) {
        this.courses.push(course);
    }
}

class Teacher extends Person {
    courses = [];
    teachCourse(course) {
        this.courses.push(course);
    }
    constructor(firstName, lastName, age, courses) {
        super(firstName, lastName, age);
        this.courses = courses;
    }
}
let jim = new Student('Jim', 'Smith', 18);
jim.enrollCourse({ courseId: 'CS101' });
console.log(jim.fullName);
jim.fullName = 'Kris Smith';
console.log(jim.fullName);
console.log(jim.courses);

let kris = new Teacher('Kris', 'Smith', 18, ['CS101']);
console.log(kris.fullName);
kris.fullName = 'Kris Smith';
console.log(kris.fullName);
console.log(kris.courses);