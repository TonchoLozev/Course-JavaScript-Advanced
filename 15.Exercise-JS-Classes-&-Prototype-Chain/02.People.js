function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.')
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    return {Employee, Junior, Senior, Manager};
}

let classes = solve();

let Employee = classes.Employee;

let Junior = classes.Junior;
let Senior = classes.Senior;
let Manager = classes.Manager;

let guy1 = new Junior('pesho', 20);
let guy2 = new Senior('gosho', 21);
let guy3 = new Manager('ivan', 22);

guy3.salary = 200;
console.log(guy3.getSalary());
guy3.dividend = 321;
guy3.collectSalary();