function tennis(input){
    let index = 0
    let tournamentCount = Number(input[index])
    index++
    let startPoints = Number(input[index])
    index++
    let avgPoints = 0
    let winCounter = 0

    for (let i = 0; i < tournamentCount; i++){
        let score = input[index]
        index++

        switch(score){
            case "W": avgPoints += 2000; 
            winCounter++; break
            case "F": avgPoints += 1200; break
            case "SF": avgPoints += 720; break
        }
    }

    let percent = winCounter / tournamentCount * 100
    let average = avgPoints/tournamentCount
    
    console.log (`Final points: ${avgPoints + startPoints}`)
    console.log(`Average points: ${Math.floor(average)}`)
    console.log(`${percent.toFixed(2)}%`)

}

tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
