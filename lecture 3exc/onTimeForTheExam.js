function onTime(input){
    const examHour = Number(input[0]);
    const examMinutes = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinutes = Number(input[3])

    const totalExamMin = examHour * 60 + examMinutes
    const totalArrivalTime = arrivalHour * 60 + arrivalMinutes
    const differenceInTime = Math.abs(totalExamMin - totalArrivalTime)
    const hourDiff = Math.floor(differenceInTime / 60)
    let minDiff = differenceInTime % 60
    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)){
        minDiff = `0${minDiff}`
    }

    if (totalArrivalTime === totalExamMin){
        console.log("On time")
    }else if (totalArrivalTime > totalExamMin && differenceInTime < 60){
        console.log("Late")
        console.log(`${minDiff} minutes after the start`)
    }else if (totalArrivalTime > totalExamMin && differenceInTime >= 60){
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`)
    }else if (differenceInTime <= 30){
        console.log("On time")
        console.log(`${minDiff} minutes before the start`)
    }else if (differenceInTime > 30 && differenceInTime < 60){
        console.log("Early")
        console.log(`${minDiff} minutes before the start`)
    }else {
        console.log("Early")
        console.log(`${hourDiff}:${minDiff} hours before the start`)
    }

}

onTime(["9",
"00",
"10",
"05"])




