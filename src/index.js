module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) return false;
    let string = str.split("");
    let sequence = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                string[i] == bracketsConfig[j][1] &&
                sequence[sequence.length - 1] == bracketsConfig[j][0]
            )
                sequence.pop();
            else if (string[i] == bracketsConfig[j][0])
                sequence.push(string[i]);
        }
    }
    return sequence.length == 0 ? true : false;
};
