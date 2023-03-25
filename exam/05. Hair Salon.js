function solve(input){
    let mens = 15 // lv
    let ladies = 20
    let kids = 10
    let touchUp = 20
    let fullColor = 30

    let targetMoney = Number(input[0])
    let earnedMoney = 0
    let index = 1
    let command = input[1]

    while(command !== "closed"){
        if(command === "haircut"){
            index++
            typeOfHaircut = input[index]
            switch(typeOfHaircut){
                case "mens":
                    earnedMoney+= 15;
                    break;
                case "ladies":
                    earnedMoney+= 20;
                    break;
                case "kids":
                    earnedMoney+= 10;
                    break;
            }
        }
        if(command === "color"){
            index++
            typeOfColor = input[index]
            switch(typeOfColor){
                case "touch up":
                    earnedMoney+= 20;
                    break;
                case "full color":
                    earnedMoney+= 30;
                    break;
            }
        }

        if(earnedMoney >= targetMoney){
            break;
        }

        index++
        command = input[index]
    }
    let difference = Math.abs(earnedMoney - targetMoney)
        if (earnedMoney < targetMoney){
            console.log(`Target not reached! You need ${difference}lv. more.`)
        }else{
            console.log(`You have reached your target for the day!`)
        }

        console.log(`Earned money: ${earnedMoney}lv.`)
}

solve(["50",
"color",
"full color",
"haircut",
"ladies"])

