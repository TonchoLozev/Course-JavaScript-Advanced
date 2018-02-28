function modifyObj(workerObject) {
    if (workerObject.handsShaking === true) {
        workerObject.bloodAlcoholLevel += (0.1 * workerObject.weight) * workerObject.experience;
        workerObject.handsShaking = false;
    }
    return workerObject;
}

console.log(modifyObj({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));