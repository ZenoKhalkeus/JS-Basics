function solve(input){
    let n = Number(input[0])
    let res = ""

    for(i = 1111; i <= 9999; i++){
        let textI = "" + i
        let a = textI.charAt(0)
        let b = textI.charAt(1)
        let c = textI.charAt(2)
        let d = textI.charAt(3)
        a = Number(a)
        b = Number(b)
        c = Number(c)
        d = Number(d)

        if(n % a === 0 && n % b === 0 && n % c === 0 & n % d === 0){
            res += `${a}${b}${c}${d} `
        }
        
    }
    console.log(res)
    
}

solve([3])