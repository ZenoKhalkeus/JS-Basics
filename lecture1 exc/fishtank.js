function fishtank (input){
    const length = Number(input[0])
    const width = Number(input[1])
    const heigth = Number(input[2])
    const percent = Number(input[3]) / 100

    const volume = length * width * heigth 
    const volumeLitre = volume / 1000
    const neededLitre = volumeLitre - volumeLitre * percent

    console.log(neededLitre)
}

fishtank(["85","75","47","17"])