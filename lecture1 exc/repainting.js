function repainting(input){
    const nylonPrice = 1.5
    const paintPrice = 14.5
    const thinnerPrice = 5
    const bagPrice = 0.4

    const neededNylon = Number(input[0])
    const neededPaint = Number(input[1])
    const neededThinner = Number(input[2])
    const neededHours = Number(input[3])

    const nylonBought = (neededNylon + 2) * nylonPrice
    const paintBought = (neededPaint + neededPaint *10 / 100) * paintPrice
    const thinnerBought = neededThinner * thinnerPrice
    const materialsTotalPrice = nylonBought + paintBought + thinnerBought + bagPrice
    const payPerHour = (nylonBought + paintBought + thinnerBought + bagPrice) * 0.3
    const totalPayForWorkers = payPerHour * neededHours
    const sumEveryone = totalPayForWorkers + materialsTotalPrice

    console.log(sumEveryone)
    
}

repainting (["10","11","4", "8"])