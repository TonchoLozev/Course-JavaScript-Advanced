class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.element = this.createElement();
    }

    get online() {
        return this._online;
    }
    set online(truoOrFlase) {

        if(truoOrFlase === true){
           $($(this.element).children()[0]).addClass('online');
        }else{
            $($(this.element).children()[0]).removeClass('online');
        }
        this._online = truoOrFlase;
    }

    render(id) {
        $('#' + id).append(this.element);
    }

    createElement() {
        let article = $('<article>');
        let names = $(`<div>${this.firstName} ${this.lastName}</div>`).addClass('title');
        let btn = $('<button>&#8505;</button>').on('click', function () {
            $($(this).parent().parent().children()[1]).toggle()
        });
        names.append(btn);
        let info = $('<div>').addClass('info');
        info.append($(`<span>&phone; ${this.phone}</span>`));
        info.append($(`<span>&#9993; ${this.email}</span>`));
        info.css('display', 'none');
        article.append(names).append(info);
        return article;
    }

}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[1].online = false, 2000);
