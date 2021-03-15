function recursive(str, bracketsArr, resultArr) {
    const neededEl = bracketsArr.find(el => str.indexOf(el) !== -1);
    if (!!neededEl) {
        const x = str.replace(neededEl, "");
        resultArr[0] = x;
        recursive(x, bracketsArr, resultArr);
    }
    else {
        return;
    }
}

module.exports = function check(str, bracketsConfig) {
    const bracketsArr = bracketsConfig.map(el => el.join(""));
    const resultArr = [str];

    recursive(str, bracketsArr, resultArr);

    return !resultArr[0];
}