function sort(colIndex, descending) {
    let products = $('tbody > tr');
    if (colIndex === 0) {
        if (descending === false) {
            products.sort((a, b) => $($(a).children()[0]).text().localeCompare($($(b).children()[0]).text()));
        } else {
            products.sort((a, b) => $($(b).children()[0]).text().localeCompare($($(a).children()[0]).text()));
        }
    } else {
        if (descending === false) {
            products.sort((a, b) => $($(a).children()[1]).text() - ($($(b).children()[1]).text()));
        } else {
            products.sort((a, b) => Number($($(b).children()[1]).text()) - Number($($(a).children()[1]).text()));
        }
    }
    $('tbody').empty();
    $('tbody').append(products);
}