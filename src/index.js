module.exports = function reverse (n) {
    str = n.toString()
    res = ""
    len = str.length
    for(let i = 0;i < len;i++) {
        res += str[len - i - 1] 
    }
    return(res.replace('-', ''))
}
