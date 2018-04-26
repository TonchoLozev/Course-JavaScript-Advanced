function calcBitcoin(array) {
    let thirdDay = 1;
    let leva = 0;
    let bitcoinsFarmed = 0;
    let firstDay = 0;
    for (let i = 0; i < array.length; i++) {
        let goldMined = Number(array[i]);
        if (thirdDay === 3) {
            thirdDay = 1;
            goldMined = Number(array[i]) - ((Number(array[i]) * 30) / 100);
        }
        leva += goldMined * 67.51;
        if (leva >= 11949.16) {
            while (true) {
                if (leva < 11949.16) {
                    break;
                }
                leva -= 11949.16;
                bitcoinsFarmed++;
            }
            if (firstDay === 0) {
                firstDay = i + 1;
            }
        }
        thirdDay++;
    }
    console.log('Bought bitcoins: ' + bitcoinsFarmed);
    if (firstDay > 0) {
        console.log('Day of the first purchased bitcoin: ' + firstDay);
    }
    console.log('Left money: ' + leva.toFixed(2) + ' lv.');
}

calcBitcoin(['100', '200', '300']);
calcBitcoin(['50', '100']);
calcBitcoin(['3124.15', '504.212', '2511.124']);