function moving(input){
    let width = Number(input[0])
    let length = Number(input[1])
    let heigth = Number(input[2])
    let allotedSpace = width * length * heigth
    let index = 3
    let command = input[index]
    let remainingSpace = allotedSpace

    while(command !== "Done"){
        let numberOfBoxes = input[index]
         remainingSpace -= numberOfBoxes

        if(remainingSpace < 0){
            console.log(`No more free space! You need ${Math.abs(remainingSpace)} Cubic meters more.`)
            break;
        }

        index++
        command = input[index]
    }
    if(command === "Done"){
        console.log(`${Math.abs(remainingSpace)} Cubic meters left.`)
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

