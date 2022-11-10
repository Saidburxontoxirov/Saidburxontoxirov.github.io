const uzButton = document.querySelector("#btn-uz");
const ruButton = document.querySelector("#btn-ru");
const uz = document.querySelector("#text-uz");
const rus = document.querySelector("#text-ru");
const bufferCyrillic = document.querySelector("#bufferCyrillic");
const bufferUzbek = document.querySelector("#bufferUzbek");
const wordCount = document.querySelector("#word-count");

const cyrillicWords = {
    "Ё": "Yo",
    "Й": "Y",
    "Ц": "S",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "Sh",
    "З": "Z",
    "Х": "X",
    "Ъ": "",
    "ё": "yo",
    "й": "i",
    "ц": "s",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "з": "z",
    "х": "x",
    "ъ": "'",
    "Ф": "F",
    "Ы": "",
    "В": "V",
    "А": "А",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "J",
    "Э": "E",
    "ф": "f",
    "ы": "",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "j",
    "э": "e",
    "Я": "Ya",
    "Ч": "Ch",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Ь": "",
    "Б": "B",
    "Ю": "Yu",
    "я": "ya",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "и": "i",
    "т": "t",
    "ь": "",
    "б": "b",
    "ю": "yu",
    'қ': "q",
    'Қ': "Q",
    'ў': "o'",
    'Ў': "O'",
    'ғ': "g'",
    'ҳ': "h",
    'Ғ': "G'",
    'Ҳ': "H",
    "ы": "i"
};


const beforeLatinWords ={
    "Yo": "Ё",
    "Sh": "Ш",
    "Ts": "Ц",
    "sh": "ш",
    "Ya": "Я",
    "Ch": "Ч",
    "ts": "ц",
    "yo": "ё",
    "Yu": "Ю",
    "ya": "я",
    "ch": "ч",
    "G'": 'Ғ',
    "yu": "ю",
    "o'": 'ў',
    "O'": 'Ў',
    "g'": 'ғ'
}
const latinWords = {
    "Y": "Й",
    "U": "У",
    "K": "К",
    "E": "Е",
    "N": "Н",
    "G": "Г",
    "Z": "З",
    "X": "Х",
    "i": "й",
    "u": "у",
    "k": "к",
    "e": "е",
    "n": "н",
    "g": "г",
    "z": "з",
    "x": "х",
    "'": "ъ",
    "F": "Ф",
    "V": "В",
    "А": "А",
    "P": "П",
    "R": "Р",
    "O": "О",
    "L": "Л",
    "D": "Д",
    "J": "Ж",
    "E": "Э",
    "f": "ф",
    "v": "в",
    "a": "а",
    "p": "п",
    "r": "р",
    "o": "о",
    "l": "л",
    "d": "д",
    "j": "ж",
    "e": "э",
    "S": "С",
    "M": "М",
    "I": "И",
    "T": "Т",
    "B": "Б",
    "s": "с",
    "m": "м",
    "i": "и",
    "t": "т",
    "b": "б",
    "q": 'қ',
    "Q": 'Қ',
    "h": 'ҳ',
    "H": 'Ҳ',
};

function translateCyrillicToLatin(word) {
    return word.split('').map(function (char) {
        if (char != "ь") {
            return cyrillicWords[char] || char;
        }
    }).join("");
}

function translatePairWords(word) {
    return word.split(' ').map(function (char) {
        return beforeLatinWords[char] || char;
    }).join(' ');    
}

function beforeTranslate(word) {
    let words = translatePairWords(word);
    return translateLatinToCyrillic(words);
}


function translateLatinToCyrillic(word) {
    return word.split('').map(function (char) {
            return latinWords[char] || char;
    }).join("");
}

uz.addEventListener("keyup", function (event) {
    const letters = event.target.value;
    const wordLength = letters.length;
    wordCount.textContent = wordLength;
    const rusConverterWords = beforeTranslate(letters);
    rus.value = rusConverterWords;
});

rus.addEventListener("keyup", function (event) {
    const uzConverterWords = translateCyrillicToLatin(event.target.value);
    uz.value = uzConverterWords;
});

uzButton.addEventListener("click", function (e) {
    console.log(e.target.value)
    ruButton.style["background-color"] = "#fff";
    ruButton.style["color"] = "#0d6efd";
    uz.focus();
    uzButton.style["background-color"] = "#0d6efd";
    uzButton.style["color"] = "#fff";


});

ruButton.addEventListener("click", function (e) {
    console.log(e.target.value)
    uzButton.style["background-color"] = "#fff";
    uzButton.style["color"] = "#0d6efd";
    if (rus) {
        rus.focus();
    }
    ruButton.style["background-color"] = "#0d6efd";
    ruButton.style["color"] = "#fff";
});

bufferCyrillic.addEventListener("click", function (e) {
    bufferCyrillic.textContent = "Copied";
    bufferUzbek.textContent = "Copy";
});

bufferUzbek.addEventListener("click", function (e) {
    bufferUzbek.textContent = "Copied";
    bufferCyrillic.textContent = "Copy";
});