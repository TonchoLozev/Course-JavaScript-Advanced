function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixRowLinks();

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital);
        country = $('#newCountryText').val('');
        capital = $('#newCapitalText').val('');
    }

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href=#>[Up]</a>').click(moveUp))
                .append(' ')
                .append($('<a href = #>[Down]</a>').click(moveDown))
                .append(' ')
                .append($(`<a href = #>[Delete]</a>`).click(deleting)));
        row.css('display', 'none');
        $('#countriesTable').append(row);
        row.fadeIn();
    }
    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            let after = row.next();
            row.insertAfter(after);
            row.fadeIn();
            fixRowLinks();
        })
    }
    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            let before = row.prev();
            row.insertBefore(before);
            row.fadeIn();
            fixRowLinks();
        })
    }
    function deleting() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixRowLinks();
        })
    }
    function fixRowLinks() {
        $('#countriesTable a').css('display', 'inline');
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none');
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css('display', 'none');
        console.log(tableRows);
    }
}
