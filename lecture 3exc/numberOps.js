function Ops (input){
    const nOne = parseInt(input[0]);
    const nTwo = parseInt(input[1]);
    const operation = input[2]

    let result = 0
    switch (operation){
        case "+": 
        result = nOne + nTwo
        if(result % 2 === 0){
            console.log(`${nOne} ${operation} ${nTwo} = ${result} - even`);
        }else{
            console.log(`${nOne} ${operation} ${nTwo} = ${result} - odd`);
        }break;
        case "-": 
        result = nOne - nTwo
        if(result % 2 === 0){
            console.log(`${nOne} ${operation} ${nTwo} = ${result} - even`);
        }else{
            console.log(`${nOne} ${operation} ${nTwo} = ${result} - odd`);
        }break;
        case "*": 
        result = nOne * nTwo
        if(result % 2 === 0){
            console.log(`${nOne} ${operation} ${nTwo} = ${result} - even`);
        }else{
            console.log(`${nOne} ${operation} ${nTwo} = ${result} - odd`);
        }break;
        case "/":
            if(nTwo === 0){
                console.log(`Cannot divide ${nOne} by zero`)
            }else{
                result = nOne / nTwo
                console.log(`${nOne} ${operation} ${nTwo} = ${result.toFixed(2)}`)
            }break
        case "%":
            if(nTwo === 0){
                console.log(`Cannot divide ${nOne} by zero`)
            }else{
            result = nOne % nTwo
            console.log(`${nOne} ${operation} ${nTwo} = ${result}`)
            }
    }
}

Ops(["112",
"0",
"/"])




