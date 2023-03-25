function graduation(input){
    let index = 0
    let name = input[index]
    index++
    let counter = 0
    let isExcluded = false

    let i = 1
    sumGrade = 0
    while (i <= 12){
        let grade = Number(input[index])
        index++
        if (grade < 4.00){
            counter++
            if(counter === 2){
                isExcluded = true
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue
        }
        sumGrade += grade
        i++
    }
    let avgGrade = sumGrade / 12
    if(!isExcluded){
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
    
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

