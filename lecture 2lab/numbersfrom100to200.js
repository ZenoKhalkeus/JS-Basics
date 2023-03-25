function numbers (input){
const givenNumber = parseInt(input[0])
if (givenNumber < 100){
    console.log("Less than 100")
}else if (givenNumber >= 100 && givenNumber <=200 ){
    console.log("Between 100 and 200")
}else if (givenNumber > 200){
    console.log ("Greater than 200")
}
}

numbers(["203200"])
