function move(command) {
    let aTowns = $('#available-towns');
    let sTowns = $('#selected-towns');
    if(command === 'right'){
        let selectedTown = aTowns.find(':selected');
        selectedTown.remove();
        sTowns.append(selectedTown);
    }else if(command === 'left'){
        let selectedTown = sTowns.find(':selected');
        selectedTown.remove();
        aTowns.append(selectedTown);
    }else{
        $('#output').empty();
        let townsToPrint = [];
        for(let town of sTowns.children()){
            townsToPrint.push($(town).text())
        }
        $('#output').append(townsToPrint.join('; '));
    }
}