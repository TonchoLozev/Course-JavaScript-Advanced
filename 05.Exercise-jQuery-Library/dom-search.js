function domSearch(selector, caseSens) {
    let passedSelector = $(selector);

    //Creating the adding elements
    let addDiv = $('<div>').addClass('add-controls');
    let addLabel = $('<label>').text('Enter text:');
    let addInputField = $('<input>');
    let addAnchor = $('<anchor>').addClass('button').text('Add').on('click', addToList);
    addLabel.append(addInputField);
    addDiv.append(addLabel);
    addDiv.append(addAnchor);
    addDiv.appendTo(passedSelector);

    //Creating the searching elements
    let searchDiv = $('<div>').addClass('search-controls');
    let searchLabel = $('<label>').text('Search:');
    let searchInputField = $('<input>').change(search);
    searchLabel.append(searchInputField);
    searchDiv.append(searchLabel);
    searchDiv.appendTo(passedSelector);

    //creating the result-controls elements
    let resultDiv = $('<div>').addClass('result-controls');
    let resultUl = $('<ul>').addClass('items-list');
    resultDiv.append(resultUl);
    resultDiv.appendTo(passedSelector);

    function addToList() {
        let li = $('<li>').addClass('list-item');
        let deleteBtn = $('<a>').addClass('button').on('click', deleteItems).text('X');
        let text = $('<strong>').text(addInputField.val());
        li.append(deleteBtn);
        li.append(text);
        li.appendTo(resultUl);
    }
    function deleteItems() {
        $(this.parentNode).remove();
    }
    function search() {
        let searchFor = searchInputField.val();
        $('.items-list li').each(function (index, element) {
            $(element).css('display', 'block');
            if(caseSens){
                if($(element).text().indexOf(searchFor) === -1){
                    $(element).css('display', 'none');
                }
            }else{
                if($(element).text().toLowerCase().indexOf(searchFor.toLowerCase()) === -1){
                    $(element).css('display', 'none');
                }
            }
        });
    }
}