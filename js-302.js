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