function solve(input){
    let n = Number(input[0]);

    let k = 1

    while (n >= k){
        console.log(k)
        k = 2 * k + 1
    }
}

solve(["8"])