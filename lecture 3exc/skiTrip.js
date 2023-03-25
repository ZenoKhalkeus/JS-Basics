function skiTrip(input){
    const daysStayed = Number(input[0]);
    const roomType = input[1];
    const rating = input[2]

    const roomForOnePersonPrice = 18
    const apartmentPrice = 25
    const presidentApartmentPrice = 35
    let totalPrice = 0

    if (roomType === "room for one person"){
        totalPrice = (daysStayed - 1) * roomForOnePersonPrice
    }else if(roomType === "apartment"){
        totalPrice = (daysStayed - 1) * apartmentPrice
        if (daysStayed <10){
            totalPrice *= 0.7
        }else if (daysStayed >= 10 && daysStayed <= 15){
            totalPrice *= 0.65
        }else{
            totalPrice *= 0.5
        }
    }else if(roomType === "president apartment"){
        totalPrice = (daysStayed - 1) * presidentApartmentPrice
        if (daysStayed <10){
            totalPrice *= 0.9
        }else if (daysStayed >= 10 && daysStayed <= 15){
            totalPrice *= 0.85
        }else{
            totalPrice *= 0.8
        }
    }

    if (rating === "positive"){
        totalPrice += totalPrice * 0.25
    }else{
        totalPrice -= totalPrice * 0.10
    }
    console.log(totalPrice.toFixed(2))
}

skiTrip(["14",
"apartment",
"positive"])
