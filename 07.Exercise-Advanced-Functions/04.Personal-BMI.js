function personalInfo(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calcIbm(weight, height),
        status: calcStatus(weight, height)
    };
    if (person.status === 'obese') {
        person['recommendation'] = 'admission required';
    }
    return person;

    function calcIbm(w, h) {
        let heightToCm = h / 100;
        return Math.round(w / (heightToCm * heightToCm));
    }

    function calcStatus(w, h) {
        let heightToCm = h / 100;
        let bmi = Math.round(w / (heightToCm * heightToCm));
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }
}

console.log(personalInfo('Honey Boo Boo', 9, 57, 137));