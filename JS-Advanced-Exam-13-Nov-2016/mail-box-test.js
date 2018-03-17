class MailBox {
    constructor() {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        let obj = {subject: subject, text: text};
        this.mailBox.push(obj);
        return this;
    }

    get messageCount() {
        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox = [];
    }

    findBySubject(substr) {
        let arr = [];
        for (let mail of this.mailBox) {
           let subj = mail.subject;
           let msg = mail.text;
           if (subj.indexOf(substr) > -1) {
               let obj = {};
               obj.subject = subj;
               obj.text = msg;
               arr.push(obj);
           }
        }
        return arr;
    }

    toString() {
       let arr = [];
       if (this.mailBox.length === 0) {
           return ` * (empty mailbox)`;
       } else {
           for (let mail of this.mailBox) {
               let subj = mail.subject;
               let msg = mail.text;
               let text = ` * [${subj}] ${msg}`;
               arr.push(text);
           }
       }
       return arr.join('\n');
    }
}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));
console.log(mb.addMessage('asd', 'sadsa'));
mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .addMessage(2, "Msg 3")
        .addMessage(1, "Msg 3")
        .addMessage(4, 3)
        .addMessage({gohko: 23}, 1)
        .toString());
