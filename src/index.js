module.exports = function reverse(n) {
    let arr = [];
    let str = n.toString()
    for (let item of str) {
        arr.unshift(item);
    }
    str = arr.join('');
    return str[str.length - 1] == '-' ? +str.slice(0, -1) : +str



}

