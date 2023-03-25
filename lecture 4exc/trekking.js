function trekking(input){
    let index = 0
    let groupCount = Number(input[index])
    index++
    let mussalaCounter = 0
    let montBlanCounter = 0
    let kiliCounter = 0
    let k2Counter = 0
    let everestCounter = 0

    for (i = 0; i < groupCount; i++){
        let numberPeopleInGroup = Number(input[index])
        index++
        if (numberPeopleInGroup <= 5){
            mussalaCounter+= numberPeopleInGroup
        }else if (numberPeopleInGroup >= 6 && numberPeopleInGroup <= 12){
            montBlanCounter+= numberPeopleInGroup
        }else if (numberPeopleInGroup >= 13 && numberPeopleInGroup <= 25){
            kiliCounter+= numberPeopleInGroup
        }else if (numberPeopleInGroup >= 26 && numberPeopleInGroup <= 40){
            k2Counter+= numberPeopleInGroup
        }else{
            everestCounter+= numberPeopleInGroup
        }
    } let totalPeople = mussalaCounter + montBlanCounter + kiliCounter + k2Counter + everestCounter
    let mussalaPercentage = mussalaCounter / totalPeople * 100
    let montBlanPercentage = montBlanCounter / totalPeople * 100
    let kiliPercentage = kiliCounter / totalPeople * 100
    let k2Percentage = k2Counter / totalPeople * 100
    let everestPercentage = everestCounter / totalPeople * 100

    console.log(`${mussalaPercentage.toFixed(2)}%`)
    console.log(`${montBlanPercentage.toFixed(2)}%`)
    console.log(`${kiliPercentage.toFixed(2)}%`)
    console.log(`${k2Percentage.toFixed(2)}%`)
    console.log(`${everestPercentage.toFixed(2)}%`)
}

trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
