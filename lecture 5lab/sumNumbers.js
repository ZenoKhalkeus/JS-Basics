function solve(input){
    let index = 0
    let num = Number(input[0])
    index++

    let sum = 0

    while (sum < num){
        let tempNumber = Number(input[index])
        index++
        sum += tempNumber
    }

    console.log(sum)
}

solve(["100",
"10",
"20",
"30",
"40"])

