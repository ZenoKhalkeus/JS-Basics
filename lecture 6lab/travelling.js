function travelling(input){
    let command = input[0]
    let savedMoney = 0
    let index = 1
    let tracker = 0


    while(command !== "End"){
        for(let targetMoney = Number(input[index]); targetMoney <= savedMoney; index++){
            tracker++
            savedMoney+=Number(input[++index])

            if(savedMoney >= targetMoney){
                savedMoney = 0
                nameindex = index - tracker - 1
                countryName = input[nameindex]
                console.log(`Going to ${countryName}!`)
                break;
            }

        }
        command = input[index]
        index++
    }
}

travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
