function commissions(input){
    let town = input[0];
    let sellingQuantity = Number(input[1]);
    let comm = 0
    

    if (!(town === "Sofia" || town === "Varna" || town === "Plovdiv")){
        console.log("error")
    }else if (sellingQuantity >= 0 && sellingQuantity <= 500){
        switch (town){
            case "Sofia": comm = sellingQuantity * 5 / 100; break
            case "Varna": comm = sellingQuantity * 4.5 / 100; break
            case "Plovdiv": comm = sellingQuantity * 5.5 / 100; break
        }console.log(comm.toFixed(2)) 
     //500 < s ≤ 1 000
    }else if(sellingQuantity > 500 && sellingQuantity <= 1000){
        switch(town){
            case "Sofia": comm = sellingQuantity * 7 / 100; break
            case "Varna": comm = sellingQuantity * 7.5 / 100; break
            case "Plovdiv": comm = sellingQuantity * 8 / 100; break
        }console.log(comm.toFixed(2)) //1 000 < s ≤ 10 000
    }else if(sellingQuantity > 1000 && sellingQuantity <= 10000){
        switch(town){
            case "Sofia": comm = sellingQuantity * 8 / 100; break
            case "Varna": comm = sellingQuantity * 10 / 100; break
            case "Plovdiv": comm = sellingQuantity * 12 / 100; break
        }console.log(comm.toFixed(2))
    }else if(sellingQuantity > 10000){
        switch(town){
            case "Sofia": comm = sellingQuantity * 12 / 100; break
            case "Varna": comm = sellingQuantity * 13 / 100; break
            case "Plovdiv": comm = sellingQuantity * 14.5 / 100; break
        }console.log(comm.toFixed(2))
    }else{
        console.log("error")
    }
}



commissions(["Sofia",
"400"])





