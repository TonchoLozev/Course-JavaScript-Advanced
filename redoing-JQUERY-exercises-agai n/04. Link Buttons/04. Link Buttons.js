function attachEvents(){
    let buttons = $('.button');
    for(let btn of buttons){
        $(btn).on('click', select)
    }
    function select() {
        for(let btn of buttons){
            $(btn).removeClass('selected');
        }
        $(this).addClass('selected');
    }
}