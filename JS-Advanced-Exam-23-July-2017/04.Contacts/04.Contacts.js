class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(newVal) {
        this._online = newVal;
        this.update();
    }

    render(id) {
        $('#' + id).append(this.element);
    }

    createElement() {
        let article = $('<article>');
        let divTitle = $('<div>').addClass('title').text(`${this.firstName} ${this.lastName}`);
        let button = $('<button>').html(`&#8505;`).on('click', () => {
            let div = $('.info');
            if (this.element.find(div).css('display') === 'none') {
                this.element.find(div).css('display', 'block')
            } else {
                this.element.find(div).css('display', 'none')
            }
        });
        let divInfo = $('<div class="info">\n' +
            `        <span>&phone; ${this.phone}</span>\n` +
            `        <span>&#9993; ${this.email}</span>\n` +
            '    </div>\n').css('display', 'none');
        article.append(divTitle.append(button)).append(divInfo);
        return article;
    }
    update(){
        if (this._online) {
            this.element.find('.title').addClass('online');
            this._online = true;
        } else {
            this.element.find('.title').removeClass('online');
            this._online = false;
        }
    }
}

let contact = new Contact(
    'Ivan',
    'Ivanov',
    '0888 123 456',
    'i.ivanov@gmail.com'
);
contact.online = true;
contact.render('main');