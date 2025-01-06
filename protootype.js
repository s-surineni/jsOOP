let Person = {
    firstName: '',
    age: 18,
    fullName() {
      return `${this.firstName}`;
    },
  };
  
  let jim = { firstName: 'Jim' };
  // Object.setPrototypeOf(jim, Person);
  // console.log(jim.fullName());
  console.log(Person.hasOwnProperty('age'));
  console.log(jim.hasOwnProperty('age'));
  
  let Student = {
    enrolledCourses: [],
    enroll(course) {
      this.enrolledCourses.push(course);
    },
  };
  
  Object.setPrototypeOf(Student, Person);
  Object.setPrototypeOf(jim, Student);
  jim.enroll({ courseId: 'CS101' });
  console.log(jim.enrolledCourses);
  