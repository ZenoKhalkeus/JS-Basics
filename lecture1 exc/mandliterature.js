function mandliterature (input){
    const numberOfPages = Number (input[0])
    const pagesPerHour = Number (input[1])
    const numberOfDays = Number (input[2])

    const fastestReadingTime = numberOfPages / pagesPerHour
    const neededTime = fastestReadingTime / numberOfDays

    console.log (neededTime)
}

mandliterature(["212","20","2"])