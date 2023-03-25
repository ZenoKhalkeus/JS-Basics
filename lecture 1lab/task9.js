function task(input){
    let greeningMetre = Number (input[0]);
    let pricePerMetre = Number (7.61);
    let discount = Number (greeningMetre * pricePerMetre * 0.18);
    let finalPrice = Number (greeningMetre * pricePerMetre - discount);

    console.log (`The final price is: ${finalPrice} lv.`);
    console.log (`The discount is: ${discount} lv.`)


}

task ([550])