let p = 0.5;
let N = 1000;
let generations = 1000;

const nextGeneration = () => {
    let totalAlleles = 2 * N;
    let a1 = 0;
    let a2 = 0;

    //Loop over totalAlleles to find a1 and a2 alleles
    for(let i = 0; i < totalAlleles; i++) {
        if(Math.random() <= p) {
            a1 += 1;
        }
        else {
            a2 += 1;
        }
    }
    p = a1 / totalAlleles
}

const round_number = (value, decimals) => {
    var shifter = Math.pow(10, decimals);
    return Math.round(value * shifter) / shifter
}

//Call nextGeneration function 1000 times
for(let i = 0; i < generations; i++) {
    nextGeneration()
    console.log("Generation " + i, round_number(p,4), round_number(1-p,4))
}