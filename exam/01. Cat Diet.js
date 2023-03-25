function solve(input){
    let fatPerGr = 9 // cal
    let protPerGr = 4 // cal
    let carbPerGr = 4 // cal

    let fatPercentage = Number(input[0])
    let protPercentage = Number(input[1])
    let carbPercentage = Number(input[2])
    let totalCal = Number(input[3])
    let waterPercentage = Number(input[4])

    let fatGr = (fatPercentage / 100) * totalCal / fatPerGr
    let protGr = (protPercentage/ 100) * totalCal / protPerGr
    let carbGr = (carbPercentage/ 100) * totalCal / carbPerGr

    let weight = fatGr + protGr + carbGr
    let calPerGr = totalCal / weight
    let withoutWaterCal = 100 - waterPercentage
    let calwithoutWater = calPerGr * (withoutWaterCal / 100)

    console.log(calwithoutWater.toFixed(4))

    
}

solve(["20",
"60",
"20",
"1800",
"50"])

