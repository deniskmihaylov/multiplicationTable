function solve (input) {
    let n = Number(input[0]); 
    let sum = 0;
    let outputNumbers = ''
    for (i = 1; i <= 10; i ++) {
        sum = i * n; 
        console.log(`${i} * ${n} = ${sum}`)
    }
}

solve ([5])
