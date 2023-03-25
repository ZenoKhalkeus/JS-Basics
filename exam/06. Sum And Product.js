function solve(input){
    let n = Number(input[0])
    let a = 1
    let b = 9
    let c = 0
    let d = 9
    let isFound = false

    for(a = 1; a< 9 ; a++){
        for(b = 9; b > a ; b--){
            for(c = 0; c< 9 ; c++){
                for(d = 9; d > c ; d--){
                    if(isFound){
                        break;
                    }
                    let sum = a + b + c + d
                    let multiplcation = a * b * c * d
                    if (sum === multiplcation && n % 10 === 5){
                        console.log(`${a}${b}${c}${d}`)
                        isFound = true
                    }
                    let division = Math.floor(multiplcation / sum)
                    if(division === 3 && n % 3 === 0){
                        console.log(`${d}${c}${b}${a}`)
                        isFound = true
                    }
                    
                }
            }
         }
    }
    if(!isFound){
        console.log("Nothing found")
    }

    
}

solve(["123"])