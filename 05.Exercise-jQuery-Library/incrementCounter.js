function increment(value){
    "use strict";
    let selector = $(value);
    let fragment = document.createDocumentFragment();

    let textArea = $('<textarea>').addClass('counter').val(0).prop('disabled', true);  //creating text area
    textArea.appendTo(fragment);

    let buttonIncrement = $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment').on('click', incrementFunc);   //creating button increment
    buttonIncrement.appendTo(fragment);

    let buttonAdd = $('<button>').addClass('btn').attr('id', 'addBtn').text('Add').on('click', addFunc);   //creating button increment
    buttonAdd.appendTo(fragment);

    let listResult = $('<ul>').addClass('results');
    listResult.appendTo(fragment);
    selector.append(fragment);
    function incrementFunc() {
        let num = Number(textArea.val());
        textArea.val(num+=1);
    }
    function addFunc() {
        let num = Number(textArea.val());
        let li = $('<li>').text(num);
        li.appendTo(listResult);
    }
}