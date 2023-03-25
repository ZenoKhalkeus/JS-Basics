function fooddelivery(input){
    const chickenMenu = 10.35
    const fishMenu = 12.40
    const vegMenu = 8.15
    const delivery = 2.5

    const numbchickenMenu = Number(input[0])
    const numbfishMenu = Number(input[1])
    const numbvegMenu = Number(input[2])
    const desert = (numbchickenMenu * chickenMenu + numbfishMenu * fishMenu + vegMenu * numbvegMenu) * 20 / 100

    const finalPrice = (numbchickenMenu * chickenMenu + numbfishMenu * fishMenu + vegMenu * numbvegMenu) + desert + delivery

    console.log(finalPrice)
}

fooddelivery(["2","4","3"])