function solve(input){
    let kg = Number(input[0])
    let type = input[1]
    let distance = Number(input[2])
    let price = 0
    let addedPrice = 0
    

    switch(type){
        case "standard":
            if(kg < 1){
                price = 0.03 * distance
                break;
            }else if(kg >= 1 && kg < 10){
                price = 0.05 * distance
                break;
            }else if(kg >= 10 && kg < 40){
                price = 0.1 * distance
                break;
            }else if(kg >= 40 && kg < 90){
                price = 0.15 * distance
                break;
            }else if(kg >= 90 && kg < 150){
                price = 0.2 * distance
            }break;
        case "express":
            if(kg < 1){
                oldPrice = 0.03 * distance
                let overPrice = 80/100 * 0.03
                let overTotalPrice = kg * overPrice
                let kmTotalPrice = overTotalPrice * distance
                price = kmTotalPrice + oldPrice
                break;
            }else if(kg >= 1 && kg < 10){
                oldPrice = 0.05 * distance
                let overPrice = 40/100 * 0.05
                let overTotalPrice = kg * overPrice
                let kmTotalPrice = overTotalPrice * distance
                price = kmTotalPrice + oldPrice
                break;
            }else if(kg >= 10 && kg < 40){
                oldPrice = 0.1 * distance
                let overPrice = 5/100 * 0.1
                let overTotalPrice = kg * overPrice
                let kmTotalPrice = overTotalPrice * distance
                price = kmTotalPrice + oldPrice
                break;
            }else if(kg >= 40 && kg < 90){
                oldPrice = 0.15 * distance
                let overPrice = 2/100 * 0.15
                let overTotalPrice = kg * overPrice
                let kmTotalPrice = overTotalPrice * distance
                price = kmTotalPrice + oldPrice
                break;
            }else if(kg >= 90 && kg < 150){
                oldPrice = 0.2 * distance
                let overPrice = 1/100 * 0.2
                let overTotalPrice = kg * overPrice
                let kmTotalPrice = overTotalPrice * distance
                price = kmTotalPrice + oldPrice
            }break;;
    }console.log(`The delivery of your shipment with weight of ${kg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`)
}

solve(["87",
"express",
"130"])




