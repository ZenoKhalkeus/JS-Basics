function fruitShop(input){
    let fruit = input[0];
    let dayOfTheWeek = input[1];
    let quantity = Number(input[2])
    let price = 0

    switch (dayOfTheWeek){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit){
                case "banana": price = 2.50 * quantity.toFixed(2); break
                case "apple": price = 1.20 * quantity.toFixed(2); break
                case "orange": price = 0.85 * quantity.toFixed(2); break
                case "grapefruit": price = 1.45 * quantity.toFixed(2); break
                case "kiwi": price = 2.70 * quantity.toFixed(2); break
                case "pineapple": price = 5.50 * quantity.toFixed(2); break
                case "grapes": price = 3.85 * quantity.toFixed(2); break
                default : console.log("error")
            }break;
        case "Saturday":
        case "Sunday":
            switch(fruit){
                case "banana": price = 2.70 * quantity.toFixed(2); break
                case "apple": price = 1.25 * quantity.toFixed(2); break
                case "orange": price = 0.90 * quantity.toFixed(2); break
                case "grapefruit": price = 1.60 * quantity.toFixed(2); break
                case "kiwi": price = 3.00 * quantity.toFixed(2); break
                case "pineapple": price = 5.60 * quantity.toFixed(2); break
                case "grapes": price = 4.20 * quantity.toFixed(2); break
                default : console.log("error")
            }break;
        default: console.log("error")
        
    }
    if (price !== 0){
        console.log(price.toFixed(2))
    }
}

fruitShop(["apple",
"Tuesday",
"2"])
