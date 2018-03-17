function increment(selector) {
    let target = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>').addClass('counter').val(0);
    $(textArea).attr('disabled', true);

    let btnIncrement = $('<button>Increment</button>').addClass('btn');
    btnIncrement.attr('id', 'incrementBtn');
    btnIncrement.on('click', incrementFunc);

    let btnAdd = $('<button>Add</button>').addClass('btn');
    btnAdd.attr('id', 'addBtn');
    btnAdd.on('click', addFunc);

    let uList = $('<ul>').addClass('results');

    textArea.appendTo(fragment);
    btnIncrement.appendTo(fragment);
    btnAdd.appendTo(fragment);
    uList.appendTo(fragment);

    target.append(fragment);

    function incrementFunc() {
        $(textArea).val(Number(textArea.val()) + 1);
    }

    function addFunc() {
        let num = textArea.val();
        let li = $('<li>').text(num);
        uList.append(li);
    }
}