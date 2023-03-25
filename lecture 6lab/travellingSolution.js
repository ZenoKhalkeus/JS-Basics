function travelling(input){
    let command = input[0]
    let savedMoney = 0
    let index = 0
    let tracker = 0


    while(command !== "End"){
        targetMoney = Number(input[++index])
        while(targetMoney >= savedMoney){
            tracker++
            savedMoney+=Number(input[++index])

            if(savedMoney >= targetMoney){
                savedMoney = 0
                let nameindex = index - tracker - 1
                tracker = 0
                countryName = input[nameindex]
                console.log(`Going to ${countryName}!`)
                break;
            }
           

        }
        index++
        command = input[index]
        
    }
}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

