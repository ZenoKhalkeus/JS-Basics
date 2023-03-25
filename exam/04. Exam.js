function solve(input){
    let numOfStudents = Number(input[0])
    let index = 1
    let topStudents = 0
    let cStudents = 0
    let dStudents = 0
    let failStudents = 0
    let avgSum = 0

    for (let i = 0; i < numOfStudents; i++){
        let grade = Number(input[index])
        index++

        avgSum += grade

        if (grade >= 5){
            topStudents++
        }else if(grade >= 4 && grade < 5){
            cStudents++
        }else if(grade >= 3 && grade < 4){
            dStudents++
        }else{
            failStudents++
        }
    }
    let percentTop = topStudents / numOfStudents * 100
    let percentC = cStudents / numOfStudents * 100
    let percentD = dStudents / numOfStudents * 100
    let percentF = failStudents / numOfStudents * 100
    let average = avgSum / numOfStudents

    console.log(`Top students: ${percentTop.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${percentC.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${percentD.toFixed(2)}%`)
    console.log(`Fail: ${percentF.toFixed(2)}%`)
    console.log(`Average: ${average.toFixed(2)}`)

}

solve(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

