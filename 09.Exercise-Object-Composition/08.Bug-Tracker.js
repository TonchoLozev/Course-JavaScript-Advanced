function reportFunctions() {
    let id = 0;
    let outputSelector;
    function report(author, description, reproducible, severity) {
        let content = $('#content');
        let wholeDiv = $('<div>').attr('id', id).addClass('report');

        let body = $('<div>').addClass('body').append($('<p>').text(description));
        wholeDiv.append(body);

        let title = $('<div>').addClass('title');
        title.append($(`<span>Submited by: ${author}</span>`).addClass('author'));
        title.append($(`<span>Open | ${severity}</span>`).addClass('status'));
        wholeDiv.append(title);

        wholeDiv.appendTo(content);
        id++;
        sort('ID');
    }

    function setStatus(id, newStatus) {
        let currentStatus = $(`#${id} .title`).children();
        let statusText = $(currentStatus[1]).text().split('|');
        statusText[0] = newStatus;
        statusText = statusText.join(' |');
        $(currentStatus[1]).text(statusText);
        console.log(statusText)
    }

    function remove(id) {
        $(`#${id}`).remove();
        sort('ID');
    }

    function sort(method) {
        let divs = $('.report');
        if (method === 'author') {
            divs = divs.sort((a, b) => {
                let author1 = $(a).children()[1]; //dumbest way to find childrens
                let author2 = $(b).children()[1]; //dumbest way to find childrens

                let author1Name = $(author1).children()[0]; //dumbest way to find childrens
                let author2Name = $(author2).children()[0]; //dumbest way to find childrens

                let name1 = $(author1Name).text().split(':')[1].trim(); //dumbest way to find childrens
                let name2 = $(author2Name).text().split(':')[1].trim(); //dumbest way to find childrens

                return name1.localeCompare(name2);
            });
            $('.report').remove();
            $('#content').append(divs);
        } else if (method === 'severity') {
            divs = divs.sort((a, b) => {
                let author1 = $(a).children()[1]; //dumbest way to find childrens
                let author2 = $(b).children()[1]; //dumbest way to find childrens

                let author1Severity = $(author1).children()[1]; //dumbest way to find childrens
                let author2Severity = $(author2).children()[1]; //dumbest way to find childrens


                let severity1 = $(author1Severity).text().split('|')[1].trim(); //dumbest way to find childrens
                let severity2 = $(author2Severity).text().split('|')[1].trim(); //dumbest way to find childrens

                return Number(severity1) - Number(severity2);
            });
            $('.report').remove();
            $('#content').append(divs);
        }else if (method === 'ID'){
            divs = divs.sort((a,b)=>{
                return Number(a.id) - (b.id);
            });
            $('.report').remove();
            $('#content').append(divs);
        }
    }
    function output(selector) {
        outputSelector = selector
    }
    return {report, setStatus, remove, sort, output};
}

