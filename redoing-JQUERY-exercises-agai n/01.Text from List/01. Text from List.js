function extractText(){
    let items = $('#items > li');
    let result = $('#result');
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push($(items[i]).text());
    }
    result.append(arr.join(', '));

}