function areaOfFigures (input){
    const figureType = input[0];
    let result = ""
    if (figureType === "square"){
        const a = Number(input[1])
        result = a * a
    }else if (figureType === "rectangle"){
        const a = Number(input[1])
        const b = Number(input[2])
        result = a * b
    }else if (figureType === "circle"){
        const r = Number(input[1])
        result = Math.PI * Math.pow(r,2)
    }else if (figureType === "triangle"){
        const a = Number(input[1])
        const ha = Number(input[2])
        result = a * ha / 2.
    }

    console.log(result.toFixed(3))
}

areaOfFigures(["triangle","4.5","20"])


