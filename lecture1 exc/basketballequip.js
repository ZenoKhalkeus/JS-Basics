function basketballequip(input){
    const yearlyTax = Number(input[0])
    const sneakers = yearlyTax - yearlyTax * 40 / 100
    const suit = sneakers - sneakers * 20 / 100
    const ball = suit / 4
    const acc = ball / 5

    const totalPrice = yearlyTax + sneakers + suit + ball + acc

    console.log(totalPrice)
}

basketballequip(["365"])