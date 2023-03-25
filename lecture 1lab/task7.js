function task (input) {
let architectName = input[0];
let numberOfProject = Number (input[1])
let time = numberOfProject * 3

console.log (`The architect ${architectName} will need ${time} hours to complete ${numberOfProject} project/s.`)

}

task (["Georgi", "4"])
