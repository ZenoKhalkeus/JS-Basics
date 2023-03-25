function solve(input){
    let loveLetter = 0.6
    let rose = 7.2
    let keychain = 3.6
    let caricature = 18.2
    let surpriseLuck = 22

    let priceParty = Number(input[0])
    let loveLetterNum = Number(input[1])
    let roseNum = Number(input[2])
    let keychainNum = Number(input[3])
    let caricatureNum = Number(input[4])
    let surpriseLuckNum = Number(input[5])

    let boughtNum = loveLetterNum + roseNum + keychainNum + caricatureNum + surpriseLuckNum
    let priceNoDiscount = loveLetter * loveLetterNum + roseNum * rose + keychainNum * keychain + caricatureNum * caricature + surpriseLuckNum * surpriseLuck

    if (boughtNum >= 25){
        priceNoDiscount = priceNoDiscount - (priceNoDiscount * 35 / 100)
    }

    priceNoDiscount = priceNoDiscount * 90 / 100
    let difference = Math.abs(priceParty - priceNoDiscount)

    if(priceNoDiscount >= priceParty){
        console.log(`Yes! ${difference.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }

    

}

solve(["320",
"8",
"2",
"5",
"5",
"1"])



