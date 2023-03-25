function solve(input){
    let index = 0
    let dayCount = Number(input[index])
    index++
    let totalFood = Number(input[index])
    index++

    let eatenDogFood = 0
    let eatenCatFood = 0
    let eatenFood = 0
    let biscuits = 0

    for(let i = 1; i <= dayCount; i++){
        let tempDogFood = Number(input[index])
        index++
        let tempCatFood = Number(input[index])
        index++

        eatenFood += tempCatFood + tempDogFood
        eatenCatFood += tempCatFood
        eatenDogFood += tempDogFood

        if(i % 3 === 0){
            biscuits += (tempCatFood + tempDogFood) * 0.1
        }
    }
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}g`)
    let eatenFoodInP = eatenFood / totalFood * 100
    let dogEatenFoodInP = eatenDogFood / eatenFood * 100
    let catEatenFoodInP = eatenCatFood / eatenFood * 100
    console.log(`${eatenFoodInP.toFixed(2)}% of the food has been eaten.`)
    console.log(`${dogEatenFoodInP.toFixed(2)}% eaten food from the dog.`)
    console.log(`${catEatenFoodInP.toFixed(2)}% eaten food from the cat.`)

}

solve([3, 1000, 300, 20, 100, 30, 110, 40])