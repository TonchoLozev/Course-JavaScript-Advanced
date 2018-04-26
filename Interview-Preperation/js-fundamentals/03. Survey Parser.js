function surveyFounder(text) {
    let svgRegex = /<svg>.+?<\/svg>/g;
    let svgExec = svgRegex.exec(text);
    let heading;
    let countSum = 0;
    let sum = [];
    if (svgExec) {
        while (svgExec) {
            let firstCatRegex = /<cat><text>.*\[(.+)\].*<\/text><\/cat>\s*<cat>.+<\/cat>/g;
            let firstCatExec = firstCatRegex.exec(text);
            if (firstCatExec) {
                heading = firstCatExec[1];
                let valuesRegex = /<g><val>(1|2|3|4|5|6|7|8|9|10)<\/val>([0-9][0-9]*)<\/g>/g;
                let valuesExec = valuesRegex.exec(text);
                if (valuesExec) {
                    while (valuesExec) {
                        let value = Number(valuesExec[1]);
                        let count = Number(valuesExec[2]);
                        countSum += count;
                        sum.push(value * count);
                        valuesExec = valuesRegex.exec(text);
                    }
                }
                else {
                    console.log('Invalid format')
                    return;
                }

            } else {
                console.log('Invalid format');
                return;
            }
            svgExec = svgRegex.exec(text);
        }
    } else {
        console.log('No survey found');
        return;
    }
    if (sum.length > 0) {
        let result = Math.round((sum.reduce((a, b) => a + b) / countSum) * 100) / 100;
        console.log(heading + ': ' + result)
    }
    else {
        console.log('No survey found')
    }
}

surveyFounder('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
surveyFounder('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>')
surveyFounder('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>')
surveyFounder('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>')