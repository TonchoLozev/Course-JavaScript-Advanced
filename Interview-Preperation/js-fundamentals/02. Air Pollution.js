function findPollutedAreas(area, cmds) {
    let matrix = [];
    for (let row = 0; row < area.length; row++) {
        let splitRow = area[row].split(' ');
        let arrCols = [];
        for (let col = 0; col < splitRow.length; col++) {
            arrCols.push(Number(splitRow[col]));
        }
        matrix.push(arrCols);
    }
    for (let cmd of cmds) {
        let splitCmd = cmd.split(' ');
        let command = splitCmd[0];
        let index = Number(splitCmd[1]);
        matrix = calcAreaPollution(command, index, matrix);
    }
    let arrToPrint = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50) {
                arrToPrint.push(`[${row}-${col}]`)
            }
        }
    }
    if (arrToPrint.length > 0) {
        console.log('Polluted areas: ' + arrToPrint.join(', '));
    } else {
        console.log('No polluted areas');
    }

    function calcAreaPollution(cmd, index, matrix) {
        if (cmd === 'breeze') {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    if (row === index) {
                        matrix[row][col] -= 15;
                    }
                }
            }
        } else if (cmd === 'gale') {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    if (col === index) {
                        matrix[row][col] -= 20;
                    }
                }
            }
        } else if (cmd === 'smog') {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += index;
                }
            }
        }

        return matrix;
    }
}

findPollutedAreas([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
findPollutedAreas([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]

);
findPollutedAreas([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);