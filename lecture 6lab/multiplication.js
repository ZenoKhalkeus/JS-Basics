function multiplication(){

    for(let x = 1; x < 11; x++){
        for(let y = 1; y < 11; y++){
            let product = x * y
            console.log(`${x} * ${y} = ${product}`)
        }
    }
}

multiplication()