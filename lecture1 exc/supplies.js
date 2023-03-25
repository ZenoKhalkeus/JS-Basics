function supplies (input){
    const numberOfPens = Number(input[0])
    const numberOfMarkers = Number(input[1])
    const litresOfDetergent = Number(input[2])
    const discount = Number(input[3]) / 100

    const penPrice = 5.8
    const markerPrice = 7.2
    const detergentPrice = 1.2

    const totalPrice = numberOfPens * penPrice + numberOfMarkers * markerPrice + litresOfDetergent * detergentPrice 
    const priceAfterDiscount = totalPrice - totalPrice * discount

    console.log (priceAfterDiscount)


}

supplies(["2","3","4","25"])