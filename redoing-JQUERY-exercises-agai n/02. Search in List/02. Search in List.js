function search() {
    let items = $('#towns > li');
    let count = 0;
    let searcText = $('#searchText');
    for (let town of items) {
        if ($(town).text().indexOf(searcText.val()) > -1) {
            count++;
            $(town).css('font-weight', 'bold');
        }
    }
    $('#result').append(`${count} matches found.`);
}