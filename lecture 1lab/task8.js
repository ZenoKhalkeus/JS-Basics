function task(input) {
    let quantityDogFood = Number (input [0]);
    let quantityCatFood = Number (input [1]);
    let dogFood = Number (2.5);
    let catFood = Number (4);
    let priceDogFood = Number (quantityDogFood * dogFood);
    let priceCatFood = Number (quantityCatFood * catFood);
    let total = Number (priceDogFood + priceCatFood);
    console.log (`${total} lv.`);

}

task (["5", "4"])