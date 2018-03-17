function solution(obj) {
    if(obj.handsShaking  === true){
        obj.handsShaking = false;
        obj.bloodAlcoholLevel += (0.1 * obj.weight) * obj.experience;
    }
    return obj;
}

console.log(solution({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));