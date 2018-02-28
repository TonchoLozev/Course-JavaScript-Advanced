let manager = function () {

    let ingredientsInStock = new Map();
    ingredientsInStock.set('protein', 0);
    ingredientsInStock.set('carbohydrate', 0);
    ingredientsInStock.set('fat', 0);
    ingredientsInStock.set('flavour', 0);

    let apple = {'carbohydrate': 1, 'flavour': 2};
    let coke = {'carbohydrate': 10, 'flavour': 20};
    let burger = {'carbohydrate': 5, 'fat': 7, 'flavour': 3};
    let omelet = {'protein': 5, 'fat': 1, 'flavour': 1};
    let cheverme = {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10};

    return function (input) {
        let inputTokens = input.split(' ');     //input

        let command = inputTokens[0];
        let ingredient = inputTokens[1];
        let quantity = Number(inputTokens[2]);
        if (command === 'restock') {
            ingredientsInStock.set(ingredient, ingredientsInStock.get(ingredient) + quantity);
            return 'Success';
        } else if (command === 'report') {
            return `protein=${ingredientsInStock.get('protein')} carbohydrate=${ingredientsInStock.get('carbohydrate')} fat=${ingredientsInStock.get('fat')} flavour=${ingredientsInStock.get('flavour')}`;
        } else if (command === 'prepare') {
            let successOrIngrediantNeeded = calculate(ingredient);
            if (successOrIngrediantNeeded !== 'success') {
                return `Error: not enough ${successOrIngrediantNeeded} in stock`;
            } else {
                return 'Success';
            }
        }

        function calculate(breakfast) {
            if (breakfast === 'apple') {
                let carbNeeded = apple.carbohydrate * quantity;
                let flavNeeded = apple.flavour * quantity;
                if (carbNeeded > ingredientsInStock.get('carbohydrate')) {
                    return 'carbohydrate';
                } else if (flavNeeded > ingredientsInStock.get('flavour')) {
                    return 'flavour';
                } else {
                    ingredientsInStock.set('carbohydrate', ingredientsInStock.get('carbohydrate') - carbNeeded);
                    ingredientsInStock.set('flavour', ingredientsInStock.get('flavour') - flavNeeded);
                    return 'success';
                }
            } else if (breakfast === 'coke') {
                let carbNeeded = coke.carbohydrate * quantity;
                let flavNeeded = coke.flavour * quantity;
                if (carbNeeded > ingredientsInStock.get('carbohydrate')) {
                    return 'carbohydrate';
                } else if (flavNeeded > ingredientsInStock.get('flavour')) {
                    return 'flavour';
                } else {
                    ingredientsInStock.set('carbohydrate', ingredientsInStock.get('carbohydrate') - carbNeeded);
                    ingredientsInStock.set('flavour', ingredientsInStock.get('flavour') - flavNeeded);
                    return 'success';
                }
            } else if (breakfast === 'burger') {
                let carbNeeded = burger.carbohydrate * quantity;
                let fatNeeded = burger.fat * quantity;
                let flavNeeded = burger.flavour * quantity;
                if (carbNeeded > ingredientsInStock.get('carbohydrate')) {
                    return 'carbohydrate';
                } else if (fatNeeded > ingredientsInStock.get('fat')) {
                    return 'fat';
                } else if (flavNeeded > ingredientsInStock.get('flavour')) {
                    return 'flavour';
                } else {
                    ingredientsInStock.set('carbohydrate', ingredientsInStock.get('carbohydrate') - carbNeeded);
                    ingredientsInStock.set('flavour', ingredientsInStock.get('flavour') - flavNeeded);
                    ingredientsInStock.set('fat', ingredientsInStock.get('fat') - fatNeeded);
                    return 'success';
                }
            } else if (breakfast === 'omelet') {
                let protNeeded = omelet.protein * quantity;
                let fatNeeded = omelet.fat * quantity;
                let flavNeeded = omelet.flavour * quantity;
                if (protNeeded > ingredientsInStock.get('protein')) {
                    return 'protein';
                } else if (fatNeeded > ingredientsInStock.get('fat')) {
                    return 'fat';
                } else if (flavNeeded > ingredientsInStock.get('flavour')) {
                    return 'flavour';
                } else {
                    ingredientsInStock.set('protein', ingredientsInStock.get('protein') - protNeeded);
                    ingredientsInStock.set('fat', ingredientsInStock.get('fat') - fatNeeded);
                    ingredientsInStock.set('flavour', ingredientsInStock.get('flavour') - flavNeeded);
                    return 'success';
                }
            } else if (breakfast === 'cheverme') {
                let protNeeded = cheverme.protein * quantity;
                let carbNeeded = cheverme.carbohydrate * quantity;
                let fatNeeded = cheverme.fat * quantity;
                let flavNeeded = cheverme.flavour * quantity;
                if (protNeeded > ingredientsInStock.get('protein')) {
                    return 'protein';
                } else if (carbNeeded > ingredientsInStock.get('carbohydrate')) {
                    return 'carbohydrate';
                } else if (fatNeeded > ingredientsInStock.get('fat')) {
                    return 'fat';
                } else if (flavNeeded > ingredientsInStock.get('flavour')) {
                    return 'flavour';
                } else {
                    ingredientsInStock.set('carbohydrate', ingredientsInStock.get('carbohydrate') - carbNeeded);
                    ingredientsInStock.set('flavour', ingredientsInStock.get('flavour') - flavNeeded);
                    ingredientsInStock.set('protein', ingredientsInStock.get('protein') - protNeeded);
                    ingredientsInStock.set('fat', ingredientsInStock.get('fat') - fatNeeded);
                    return 'success';
                }
            }
        }
    };
};
console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));

