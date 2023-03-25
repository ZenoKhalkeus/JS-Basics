function coins(input){
    let change = input[0]
    let convertedChange = parseInt(change * 100)
    let coins = 0;
    while (convertedChange > 0){
        if (convertedChange - 200 >= 0){
            coins++
            convertedChange -= 200
        }else if (convertedChange -100 >= 0){
            coins++
            convertedChange -= 100
        }else if (convertedChange -50 >= 0){
            coins++
            convertedChange -= 50
        }else if (convertedChange -20 >= 0){
            coins++
            convertedChange -= 20
        }else if (convertedChange -10 >= 0){
            coins++
            convertedChange -= 10
        }else if (convertedChange -5 >= 0){
            coins++
            convertedChange -= 5
        }else if (convertedChange -2 >= 0){
            coins++
            convertedChange -= 2
        }else{
            coins++
            convertedChange -= 1
        }
    }
    console.log(coins)
}

coins(["1.23"])