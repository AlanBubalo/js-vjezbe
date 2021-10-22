let min = (a, b) => {
    if (a < b)
        return a;
    else
        return b;
}

let istiZnakovi = (word) => {
    let count = 0;
    let maxCount = 0;
    for (let i = 1; i < word.length; i++){
        if (word[i - 1] === word[i])
            count += 1;
        else
            count = 1;
        if (count > maxCount)
            maxCount = count;
    }
    return maxCount;
}

let ackermann = (m, n) => {
    if (m === 0)
        return n + 1;
    else if (m > 0 && n === 0)
        return ackermann(m - 1, 1);
    else if (m > 0 && n > 0)
        return ackermann(m - 1, ackermann(m, n - 1));
}