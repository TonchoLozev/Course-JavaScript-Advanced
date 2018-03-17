class TitleBar {
    constructor(title) {
        this.title = title;
        this.listOfElements = [];
    }
    addLink(href, name){
        let obj = {href: href, name: name};
        this.listOfElements.push(obj);
    }
    appendTo(selector){
        let header = $('<header>').addClass('header');

        let divHeaderRow = $('<div>').addClass('header-row');
        let btn = $('<a>&#9776;</a>').addClass('button').on('click', function () {
           $('.drawer').toggle();
        });
        let span = $(`<span>${this.title}</span>`).addClass('title');
        divHeaderRow.append(btn).append(span);
        header.append(divHeaderRow);

        let divDrawer = $('<div>').addClass('drawer').css('display', 'none');
        let menu = $('<nav>').addClass('menu');
        for(let el of this.listOfElements){
            let a = $(`<a>${el.name}</a>`).addClass('menu-link');
            a.attr('href', `${el.href}`);
            menu.append(a);
        }
        divDrawer.append(menu);
        header.append(divDrawer);
        $(selector).prepend(header);
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');