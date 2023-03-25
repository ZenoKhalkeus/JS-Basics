function hotelRoom(input){
    const mayAndOctStudioPrice = 50
    const mayAndOctApartmentPrice = 65
    const junAndSepStudioPrice = 75.2
    const junAndSepApartmentPrice = 68.7
    const julAndAugStudioprice = 76
    const julAndAugApartmentprice = 77

    const season = input[0];
    const nights = Number(input[1])

    let totalMoneyForStudio = 0
    let totalMoneyForApartment = 0

    switch (season){
        case "May":
        case "October":
            totalMoneyForStudio = nights * mayAndOctStudioPrice
            totalMoneyForApartment = nights * mayAndOctApartmentPrice;
            if (nights > 7 && nights < 14){
                totalMoneyForStudio -= totalMoneyForStudio * 0.05
            }else if (nights > 14){
                totalMoneyForStudio -= totalMoneyForStudio * 0.3
            }
            break;
        case "June":
        case "September":
            totalMoneyForStudio = nights * junAndSepStudioPrice
            totalMoneyForApartment = nights * junAndSepApartmentPrice
            if (nights > 14){
                totalMoneyForStudio -= totalMoneyForStudio * 0.2
            }
            break;
        case "July":
        case "August":
            totalMoneyForStudio = nights * julAndAugStudioprice
            totalMoneyForApartment = nights * julAndAugApartmentprice
            break;
    }
    if (nights > 14){
        totalMoneyForApartment -= totalMoneyForApartment * 0.1
    }
    console.log(`Apartment: ${totalMoneyForApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalMoneyForStudio.toFixed(2)} lv.`)
}