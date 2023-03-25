function solve(input){
    let index = 0
    let inputLine = input[index]
    let standardCounter = 0
    let kidCounter = 0
    let studentCounter = 0

    while(inputLine !== "Finish"){
        let movieName = inputLine
        index++
        let allTickets = Number(input[index])
        let freeSpace = allTickets
        index++
        let ticketType = input[index]
        while(ticketType !== "End"){
            switch(ticketType){
                case "standard":
                    standardCounter++;
                    break
                case "kid":
                    kidCounter++; 
                    break
                case "student":
                    studentCounter++;
                    break
            }
            freeSpace--
            if(freeSpace === 0){
                break
        }
        index++
        ticketType = input[index]
        }
        let boughtTickets = allTickets - freeSpace
        let fullPercentage = boughtTickets / allTickets * 100
        console.log(`${movieName} - ${fullPercentage.toFixed(2)}% full.`)
        index++
        inputLine = input[index]
    }
    let allBoughtTickets = kidCounter + studentCounter + standardCounter
    console.log(`Total tickets: ${allBoughtTickets}`)
    console.log(`${(studentCounter / allBoughtTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardCounter / allBoughtTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidCounter / allBoughtTickets * 100).toFixed(2)}% kids tickets.`)

}

solve(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
