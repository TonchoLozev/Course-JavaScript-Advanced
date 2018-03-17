function tableBuilder(selector) {

    return {
        createTable: function (columnNames) {
            let table = $('<table>');
            let tr = $('<tr>');
            for (let column of columnNames) {
                tr.append($(`<th>`).text(column))
            }
            tr.append($('<th>Action</th>'));
            table.append(tr);
            $(selector).empty();
            $(selector).append(table);


        }, fillData: function (dataRows) {
            for (let data of dataRows) {
                let tr = $('<tr>');

                for (let namesAndTowns of data) {
                    console.log(namesAndTowns);
                    tr.append($(`<td>`).text(namesAndTowns));
                }
                tr.append($(`<td>`).append($('<button>').text('Delete').on('click', function () {
                    $(this).parent().parent().remove();
                })));
                $(selector + ' table').append(tr);
            }
        }
    }
}
