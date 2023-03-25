function walking(input){
    let index = 0
    let command = input[index]
    index++
    let goal = 10000

    while(command !== "Going home"){
        let steps = Number(command)
        goal -= steps
        if (goal <= 0){
            console.log(`Goal reached! Good job!`)
            console.log(`${Math.abs(goal)} steps over the goal!`)
            break;
        }
        command = input[index]
        index++
    }
    if (command === "Going home"){
        let leftSteps = Number(input[index])
        index++
        goal -= leftSteps
        if (goal <= 0){
            console.log(`Goal reached! Good job!`)
            console.log(`${Math.abs(goal)} steps over the goal!`)
        }else{
            console.log(`${Math.abs(goal)} more steps to reach goal.`)
        }
    }

}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


