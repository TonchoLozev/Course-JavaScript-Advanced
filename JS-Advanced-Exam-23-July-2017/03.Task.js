class Task {
    constructor(title, deadline){
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
        this.isOverdue;
    }

    get status(){
        return this._status;
    }
    set status(newStatus){
        this._status = newStatus;
    }

    get deadline(){
        return this._deadline;
    }
    set deadline(newDeadLine){
        if(newDeadLine < Date.now()){
            throw new Error ('Invalid Date');
        }else{
            this._deadline = newDeadLine;
        }
    }

    get isOverdue(){
        if(this.deadline < Date.now() && this._status !== 'Complete'){
            return true;
        }else{
            return false;
        }
    }

    get rank(){
        if(this.isOverdue){
            return 0;
        } else if(this.status === 'In Progress'){
            return 1;
        } else if(this.status === 'Open'){
            return 2;
        } else {
            return 3;
        }
    }

    get taskIcon(){
        if(this.isOverdue){
            return "\u26A0"
        }else if (this.status === 'Complete'){
            return "\u2714";
        }else if (this.status === 'In Progress'){
            return "\u219D";
        }else if (this.status === 'Open'){
            return "\u2731";
        }
    }
    toString(){
        let text = `[${this.taskIcon}] ${this.title}`;
        if(this.isOverdue === true){
            text+='(overdue)';
        }else if(this._status === 'Complete'){
            return text;
        }else{
            text+=`(deadline: ${this.deadline})`;
        }
        return text;
    }

    static comparator(a, b){
        let criteria = a.rank - b.rank;
        if(criteria !== 0){
            return criteria;
        }else{
            return a.deadline - b.deadline;
        }
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
let task4 = new Task('Task 4', new Date());//
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
