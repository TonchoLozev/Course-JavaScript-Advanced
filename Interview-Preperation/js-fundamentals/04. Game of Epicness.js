function findWinner(kingdoms, battles) {
    let kingdomAndArmy = new Map();
    let kingdomWinsAndLoses = new Map();
    let generalWinsAndLoses = new Map();

    for (let kingdom of kingdoms) {
        let kingdomName = kingdom.kingdom;
        let generalName = kingdom.general;
        let army = Number(kingdom.army);
        if (!kingdomAndArmy.has(kingdomName)) {
            kingdomAndArmy.set(kingdomName, new Map());
            kingdomAndArmy.get(kingdomName).set(generalName, army);

            kingdomWinsAndLoses.set(kingdomName, {wins: 0, loses: 0});
            generalWinsAndLoses.set(generalName, {wins: 0, loses: 0});
        } else {
            if (!kingdomAndArmy.get(kingdomName).has(generalName)) {
                kingdomAndArmy.get(kingdomName).set(generalName, army);
                generalWinsAndLoses.set(generalName, {wins: 0, loses: 0});
            } else {
                kingdomAndArmy.get(kingdomName).set(generalName, kingdomAndArmy.get(kingdomName).get(generalName) + army)
            }
        }
    }

    for (let battle of battles) {

        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let attackingArmy = kingdomAndArmy.get(attackingKingdom).get(attackingGeneral);

        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];
        let defendingArmy = kingdomAndArmy.get(defendingKingdom).get(defendingGeneral);

        if (attackingKingdom !== defendingKingdom) {
            if (attackingArmy > defendingArmy) {
                attackingArmy = Math.floor(attackingArmy + ((attackingArmy * 10) / 100));
                defendingArmy = Math.floor(defendingArmy - ((defendingArmy * 10) / 100));

                kingdomAndArmy.get(attackingKingdom).set(attackingGeneral, attackingArmy);
                kingdomAndArmy.get(defendingKingdom).set(defendingGeneral, defendingArmy);

                kingdomWinsAndLoses.get(attackingKingdom).wins += 1;
                kingdomWinsAndLoses.get(defendingKingdom).loses += 1;

                generalWinsAndLoses.get(attackingGeneral).wins += 1;
                generalWinsAndLoses.get(defendingGeneral).loses += 1;
            } else if (attackingArmy < defendingArmy) {
                attackingArmy = Math.floor(attackingArmy - ((attackingArmy * 10) / 100));
                defendingArmy = Math.floor(defendingArmy + ((defendingArmy * 10) / 100));

                kingdomAndArmy.get(attackingKingdom).set(attackingGeneral, attackingArmy);
                kingdomAndArmy.get(defendingKingdom).set(defendingGeneral, defendingArmy);

                kingdomWinsAndLoses.get(attackingKingdom).loses += 1;
                kingdomWinsAndLoses.get(defendingKingdom).wins += 1;

                generalWinsAndLoses.get(defendingGeneral).wins += 1;
                generalWinsAndLoses.get(attackingGeneral).loses += 1;
            }
        }
    }
    let sortedKingdoms = Array.from(kingdomWinsAndLoses).sort((a, b) => {
        if (a[1].wins !== b[1].wins) {
            return b[1].wins - a[1].wins;
        } else {
            if (a[1].loses !== b[1].loses) {
                return a[1].loses - b[1].loses;
            } else {
                return a[0].localeCompare(b[0]);
            }
        }
    });
    for (let [kingdom, score] of sortedKingdoms) {
        console.log('Winner: ' + kingdom);
        let sortedGenerals = Array.from(kingdomAndArmy.get(kingdom)).sort((a, b) => {
            return b[1] - a[1];
        });
        for (let general of sortedGenerals) {
            console.log('/\\general: ' + general[0]);
            console.log('---army: ' + general[1]);
            console.log('---wins: ' + generalWinsAndLoses.get(general[0]).wins);
            console.log('---losses: ' + generalWinsAndLoses.get(general[0]).loses)
        }
        break;
    }
}

findWinner([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);