const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const words = expr.split(/\*{10}/);
    let strWords = [];
    words.forEach(el => {
        let word = '';
        for (let i = 0; i < el.length; i += 10) {
            let letter = el.substring(i, i + 10 > el.length - 1 ? el.length : i + 10);
            if (letter.length < 10) {
                letter += '0';
            };
            let morse = '';
            for (let i = 0; i < letter.length; i += 2) {
                if (letter.substring(i, i + 2) == '10') {
                    morse += '.';
                }
                if (letter.substring(i, i + 2) == '11') {
                    morse += '-'
                }
            }
            word += MORSE_TABLE[morse]
        }
        strWords = [...strWords, word];
    });

    return strWords.join(" ");
}

module.exports = {
    decode
}