function attachEvents(){
    let towns = $('#items > li');
    for(let town of towns){
        $(town).on('click', select);
    }

    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let townArr = [];
        for(let town of towns){
            if($(town).attr('data-selected')){
                townArr.push($(town).text());
            }
        }
        $('#selectedTowns').empty();
        $('#selectedTowns').append(`Selected towns: ${townArr.join(', ')}`)
    }

    function select() {
        if(!$(this).attr('data-selected')){
            $(this).attr('data-selected', true);
            $(this).css('background', '#DDD');
        }else{
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        }
    }
}