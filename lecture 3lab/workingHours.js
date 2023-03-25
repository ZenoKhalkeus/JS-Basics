function workingHours(input){
    let workingHour = Number(input[0])
    let dayOfTheWeek = input[1]

    if (workingHour >= 10 && workingHour <= 18 && dayOfTheWeek !== "Sunday"){
        console.log("open")
    }else{
        console.log("closed")
    }
}

workingHours(["11",
"Monday"])
