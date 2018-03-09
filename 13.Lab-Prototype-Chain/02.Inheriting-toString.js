function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let personToStr = super.toString().slice(0, -1);
            return personToStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let personToStr = super.toString().slice(0, -1);
            return personToStr + `, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student}
}

let obj = personAndTeacher();

const Person = obj.Person;
const Teacher = obj.Teacher;
const Student = obj.Student;

//let p = new Person('Joro', 'jori@gosy.bg');
//console.log(p + '');
//
//let t = new Teacher('Stoqn', 'stoicheto@abv.bg', 'Java');
//console.log(t + '');
//
//let s = new Student('Jorence', 'disbeast@beast.bg', 'php');
//console.log(s + '');

module.exports = Person;