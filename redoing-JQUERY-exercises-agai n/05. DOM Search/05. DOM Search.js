function domSearch(selector, caseSensitive) {

    //add controls
    let addControls = $('<div>').addClass('add-controls');
    let labelAdd = $('<label>Enter text: </label>');
    let addInput = $('<input>');
    let addBtn = $('<a>Add</a>').addClass('button').css('display', 'inline-block').on('click', addFunc);

    labelAdd.append(addInput);
    addControls.append(addBtn);
    addControls.append(labelAdd);

    //search controls
    let searchControls = $('<div>').addClass('search-controls');
    let labelSearch = $('<label>Search: </label>');
    let searchInput = $('<input>').on('change', searchFunc);
    labelSearch.append(searchInput);
    searchControls.append(labelSearch);

    //result controls
    let resultControls = $('<div>').addClass('result-controls');
    let itemList = $('<ul>').addClass('items-list');
    resultControls.append(itemList);

    $(selector).append(addControls);
    $(selector).append(searchControls);
    $(selector).append(resultControls);

    function addFunc() {
        let li = $(`<li>`).addClass('list-item');
        let deleteBtn = $('<a>X</a>').addClass('button').on('click', deleteFunc);
        let text = $(`<strong>${addInput.val()}</strong>`);
        li.append(deleteBtn);
        li.append(text);
        $(itemList).append(li);

    }

    function searchFunc() {
        let text = $(this).val();
        if (text.length > 0) {
            if (caseSensitive === true) {
                for (let li of itemList) {
                    let currentLi = ($(li).text()).substr(1);
                    if (currentLi.indexOf(text) === -1) {
                        $(li).css('display', 'none');
                    }else{
                        $(li).css('display', 'block');
                    }
                }
            } else {
                for (let li of itemList.children()) {
                    let currentLi = ($(li).text()).substr(1);
                    if (currentLi.toLowerCase().indexOf(text.toLowerCase()) === -1) {
                        $(li).css('display', 'none');
                    }else{
                        $(li).css('display', 'block');
                    }
                }
            }
        } else {
            for (let li of itemList.children()) {
                $(li).css('display', 'block');
            }
        }

    }

    function deleteFunc() {
        $(this).parent().remove();
    }
}