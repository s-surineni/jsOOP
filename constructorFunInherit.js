function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.courses = [];
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.enrollCourse = function(course) {
    this.courses.push(course);
}

let jim = new Student('Jim', 'Smith', 18);
jim.enrollCourse({ courseId: 'CS101' });
console.log(jim.fullName());
console.log(jim.courses);
console.log(jim.constructor)
console.log(typeof jim)