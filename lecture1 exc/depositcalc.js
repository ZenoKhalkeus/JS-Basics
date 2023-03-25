function depositcalc (input) {
    const depositedSum = Number (input[0]);
    const timeOfDepositMonths = Number (input[1]);
    const interestRate = Number (input [2]);

    const interestMoney = depositedSum * interestRate / 100
    const monthlyInterest = interestMoney / 12
    const finalSum = depositedSum + monthlyInterest * timeOfDepositMonths

    console.log (finalSum)

}

depositcalc (["200","3","5.7"])