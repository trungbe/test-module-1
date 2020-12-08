function isFibonacci(num) {
    let numIsFibonacci = false;
    let f0 = 0;
    let f1 = 1;
    while (f0 <= num) {
        if (num == f0) {
            numIsFibonacci = true;
        } else {
            let tmp = f1;
            f1 = f0 + f1;
            f0 = tmp;
        }
    }
    return numIsFibonacci;
}

