function multiplication(input){
    let num = Number(input[0]);

    for (let i = 1; i <= 10; i++){
        let res = i * num
        console.log(`${i} * ${num} = ${res}`)
    }
}

multiplication([2])