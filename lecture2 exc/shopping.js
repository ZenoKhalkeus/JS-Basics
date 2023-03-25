function shopping(input){
    const videocard = 250
    const budget = Number(input[0])
    const videocardCount = Number(input[1])
    const processorCount = Number(input[2])
    const ramCount = Number(input[3])

    const videocardPrice = videocard * videocardCount
    const processorPrice = videocardPrice * 0.35
    const ramPrice = videocardPrice * 0.1

    let totalSum = videocardPrice + processorPrice * processorCount + ramPrice * ramCount

    if (videocardCount > processorCount){
        totalSum *= 0.85
    }

    const difference = Math.abs(totalSum - budget).toFixed(2);
    if (totalSum <= budget){
        console.log(`You have ${difference} leva left!`)
    }else{
        console.log(`Not enough money! You need ${difference} leva more!`)
    }


}

shopping (["920.45","3","1","1"])

