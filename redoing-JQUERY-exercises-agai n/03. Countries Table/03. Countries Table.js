function initializeTable() {
    $('#createLink').on('click', createFunc);

    createFunc('Bulgaria', 'Sofia');
    createFunc('Germany', 'Berlin');
    createFunc('Russia', 'Moscow');

    function createFunc(countryGiven, capitalGiven) {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        if (arguments.length === 2) {
            country = countryGiven;
            capital = capitalGiven;
        }
        let rowTr = $('<tr>');
        let countryTh = $(`<td>${country}</td>`);
        let capitalTh = $(`<td>${capital}</td>`);

        let btnUp = $('<a href="#">[Up] </a>').on('click', upFunc);
        let btnDown = $('<a href="#">[Down] </a>').on('click', downFunc);
        let btnDelete = $('<a href="#">[Delete]</a>').on('click', deleteFunc);

        let actionTh = $(`<td>`).append(btnUp).append(btnDown).append(btnDelete);
        rowTr.append(countryTh).append(capitalTh).append(actionTh);
        $('#countriesTable').append(rowTr);
        updateButtons();
    }

    function upFunc() {
        let row =  $(this).parent().parent();
        let previous = $(this).parent().parent().prev();
        let temp = $(this).parent().parent();
        row.insertBefore(previous);
        updateButtons();
    }

    function downFunc() {
        let row =  $(this).parent().parent();
        let next = $(this).parent().parent().next();
        let temp = $(this).parent().parent();
        row.insertAfter(next);
        updateButtons();
    }

    function deleteFunc() {
        let row = $(this).parent().parent();
        row.remove();
        updateButtons();
    }

    function updateButtons() {

        let table = $('#countriesTable').children().children().slice(2);

         for (let i = 0; i < table.length; i++) {
             if(i === 0){
                 $($($(table[i]).children()[2]).children()[0]).hide();
             }else if(i === table.length -1){
                 $($($(table[i]).children()[2]).children()[1]).hide();
             }else{
                 $($($(table[i]).children()[2]).children()[0]).show();
                 $($($(table[i]).children()[2]).children()[1]).show();
             }
         }

    }
}