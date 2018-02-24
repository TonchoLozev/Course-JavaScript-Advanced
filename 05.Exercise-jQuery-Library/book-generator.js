let createBook = (function createBook() {
    let id = 1;
    return function(selector, title, author, isbn) {
        "use strict";
        let selectorToAtach = $(selector);

        let currentId = 'book'+id;
        let div = $('<div>').attr('id', currentId).css('border', '');

        let titleParagraph = $('<p>').text(title).addClass('title');
        div.append(titleParagraph);

        let authorParagraph = $('<p>').text(author).addClass('author');
        div.append(authorParagraph);

        let isbnParagraph = $('<p>').text(isbn).addClass('isbn');
        div.append(isbnParagraph);

        let selectBtn = $('<button>').text('Select').on('click', selectBorder);
        div.append(selectBtn);

        let deselectBtn = $('<button>').text('Deselect').on('click', deselectBorder);
        div.append(deselectBtn);

        div.appendTo(selectorToAtach);
        id++;

        function selectBorder() {
            this.parentNode.style.border = '2px solid blue';
        }
        function deselectBorder() {
            this.parentNode.style.border = '';
        }
    }
}());