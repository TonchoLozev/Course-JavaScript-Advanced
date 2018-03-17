class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }
    get deadline(){
        return this._deadline;
    }
    set deadline(newDeadLine){
        if(newDeadLine < Date.now()){
            throw new Error('Invalid date');
        }
        this._deadline = newDeadLine;
    }
    get isOverdue() {
        if (this.deadline < Date.now() && this.status !== 'Complete') {
            return true;
        }
        return false;
    }
    toString(){
        let icon = '';
        let text = '';
        if(this.isOverdue === true){
            icon = "\u26A0";
            text = `[${icon}] ${this.title} (overdue)`;
        }else if (this.status === 'Complete'){
            icon = "\u2714";
            text = `[${icon}] ${this.title}`;
        }else if (this.status === 'In Progress'){
            icon = "\u219D";
            text = `[${icon}] ${this.title} (deadline: ${this.deadline})`;
        }else if (this.status === 'Open'){
            icon = "\u2731";
            text = `[${icon}] ${this.title} (deadline: ${this.deadline})`;
        }
        return text;
    }
    get taskRank(){
        if(this.isOverdue === true){
            return 1;
        }else if (this.status === 'In Progress'){
            return 2;
        }else if (this.status ==='Open'){
            return 3;
        }else if (this.status === 'Complete'){
            return 4;
        }
    }
    static comparator (aTask, bTask){
        return aTask.taskRank - bTask.taskRank;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
