function solve(input){
    let index = 0
    let playerOneEggs = Number(input[index])
    index++
    let playerTwoEggs = Number(input[index])
    index++

    let command = input[index]
    index++

    while(command!== "End of battle"){
        if(command === "one"){
            playerTwoEggs--
        }else{
            playerOneEggs--
        }
        if (playerOneEggs === 0){
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`)
            break
        } else if(playerTwoEggs === 0){
            console.log(`Player two is out of eggs. Player one  has ${playerOneEggs} eggs left.`)
            break;
        }

        command = input[index]
        index++
    }
    if (command === "End of battle"){
        console.log(`Player one has ${playerOneEggs} eggs left.`)
        console.log(`Player two has ${playerTwoEggs} eggs left.`)
    }

}

solve([5, 4, "one", "two", "one", "two","two","End of battle"])