function radianstodeg (input){
    const radian = Number (input[0]);
    const degree = radian * 180 / Math.PI;

    console.log (degree);
}

radianstodeg (["3.1416"])