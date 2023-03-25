function cake(input){
    let width = Number(input[0])
    let length = Number(input[1])
    let cakePieces = width * length
    let index = 2
    let command = input[index]
    let remainingPieces = cakePieces

    while (command !== "STOP"){
        let takenPieces = input[index]
        remainingPieces -= takenPieces

        if (remainingPieces < 0){
            console.log(`No more cake left! You need ${Math.abs(remainingPieces)} pieces more.`)
            break;
        }
        index++
        command = input[index]
    }

    if (command === "STOP"){
        console.log(`${remainingPieces} pieces are left.`)
    }

    
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])


