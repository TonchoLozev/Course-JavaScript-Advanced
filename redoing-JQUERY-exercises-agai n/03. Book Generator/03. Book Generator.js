function createBook(selector, title, auhthor, isbn) {
    (function () {
        let id = 1;
        return function (selector, title, auhthor, isbn) {
            let div = $('<div>').attr('id', `book${id}`).css('border', 'medium:none');

            let pTitle = $(`<p>${title}</p>`).addClass('title');

            let pAuthor = $(`<p>${auhthor}</p>`).addClass('author');

            let pISBN = $(`<p>${isbn}</p>`).addClass('isbn');

            let selectBtn = $('<button>Select</button>').on('click', selectFunc);

            let deselectBtn = $('<button>Deselect</button>').on('click', deselectFunc);

            pTitle.appendTo(div);
            pAuthor.appendTo(div);
            pISBN.appendTo(div);
            selectBtn.appendTo(div);
            deselectBtn.appendTo(div);
            $(selector).append(div);

            function selectFunc() {
                $(div).css('border', '2px solid blue');
            }
            function deselectFunc() {
                $(div).css('border', 'none');
            }
        }
    })();
}