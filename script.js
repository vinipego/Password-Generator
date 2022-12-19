// const characters = ["A", "B", "C", "D", "E",
//     "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
//     "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
//     "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",
//     "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
//     "t", "u", "v", "w", "x", "y", "z", "0", "1", "2",
//     "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
//     "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
//     "-", "+", "=", "{", "[", "}", "]", ",", "|", ":",
//     ";", "<", ">", ".", "?",
//     "/"
// ];

let characters = [];
const upperCaseCharacters = ["A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z"
];
const lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"
];
const numberCharacters = ["0", "1", "2",
    "3", "4", "5", "6", "7", "8", "9"
];
const specialCharacters = ["~", "`", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
    "-", "+", "=", "{", "[", "}", "]", ",", "|", ":",
    ";", "<", ">", ".", "?",
    "/"
];

// BEGIN input range from the internet
const slideValue = document.querySelector("#slideShow");
const inputSlider = document.querySelector("#rangeInpute");
let inputValue = 0;
inputSlider.oninput = (() => {
    inputValue = inputSlider.value;
    slideValue.textContent = inputValue;
    slideValue.style.left = (inputValue * 4.8) + "%";
    slideValue.classList.add("show");
    passwordLength = slideValue.textContent;
});
inputSlider.onblur = (() => {
    slideValue.classList.remove("show");
});
// END input range from the internet

let password = document.getElementById("passwordOutput");
let passwordArray = [];
let passwordLength = inputSlider.value;
let lowerCaseCheck = document.querySelector("#lowerCaseCharacterCheck");
let upperCaseCheck = document.querySelector("#upperCaseCharacterCheck");
let numberCheck = document.querySelector("#numberCharacterCheck");
let specialCheck = document.querySelector("#specialCharacterCheck");
let tooltipOfCopy = document.querySelector("#copyTooltip");

function newPassword() {
    clearPasswords();
    formCharacters();
    do {
        generatePassword();
    } while (isStrong() == false);

}

function clearPasswords() {
    passwordArray = [];
    password.value = "";
    characters = [];
}

function formCharacters() {
    // the .concat() function adds an array onto another array,
    // it may also be useful to add a strong onto an array
    // but I dont now for certain
    if (lowerCaseCheck.checked == true) {
        characters = characters.concat(lowerCaseCharacters);
    }
    if (upperCaseCheck.checked == true) {
        characters = characters.concat(upperCaseCharacters);
    }
    if (numberCheck.checked == true) {
        characters = characters.concat(numberCharacters);
    }
    if (specialCheck.checked == true) {
        characters = characters.concat(specialCharacters);
    }

}

function generatePassword() {
    for (let i = 0; i < passwordLength; i++) {
        // the position in [] of an array cannot be an opration
        // but it can be a variable, randomNumber takes the operation value onto itself
        // and goes into the [] of the array
        let randomNumber = Math.floor(Math.random() * characters.length);
        passwordArray[i] = characters[randomNumber];
    }
    // .join() removes the commas that separate array values and
    // replaces them with something instead. Even if that something is a nothing.
    password.value = passwordArray.join("");
}

function isStrong() {
    if (includeUpperCaseCharacter() == true &&
        includeLowerCaseCharacter() == true &&
        includeNumberharacter() == true &&
        includeSpecialCharacter() == true) {
        return true;
    } else {
        return false;
    }

}

function includeLowerCaseCharacter() {
    if (lowerCaseCheck.checked == false) {
        for (let i = 0; i < lowerCaseCharacters.length; i++) {
            let checker = password.value.includes(lowerCaseCharacters[i]);
            if (checker == true) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < lowerCaseCharacters.length; i++) {
            let checker = password.value.includes(lowerCaseCharacters[i]);
            if (checker == true) {
                return true;
            }
        }
        return false;
    }
}

function includeUpperCaseCharacter() {
    if (upperCaseCheck.checked == false) {
        for (let i = 0; i < upperCaseCharacters.length; i++) {
            let checker = password.value.includes(upperCaseCharacters[i]);
            if (checker == true) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < upperCaseCharacters.length; i++) {
            let checker = password.value.includes(upperCaseCharacters[i]);
            if (checker == true) {
                return true;
            }
        }
        return false;
    }
}

function includeNumberharacter() {
    if (numberCheck.checked == false) {
        for (let i = 0; i < numberCharacters.length; i++) {
            let checker = password.value.includes(numberCharacters[i]);
            if (checker == true) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < numberCharacters.length; i++) {
            let checker = password.value.includes(numberCharacters[i]);
            if (checker == true) {
                return true;
            }
        }
        return false;
    }
}

function includeSpecialCharacter() {
    if (specialCheck.checked == false) {
        for (let i = 0; i < specialCharacters.length; i++) {
            let checker = password.value.includes(specialCharacters[i]);
            if (checker == true) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < specialCharacters.length; i++) {
            let checker = password.value.includes(specialCharacters[i]);
            if (checker == true) {
                return true;
            }
        }
        return false;
    }
}

function copyContent() {
    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);
    if (password.value == "") {
        tooltipOfCopy.textContent = "Create a new password first";
    } else {
        tooltipOfCopy.textContent = password.value;
    }
}

function outFunc() {
    tooltipOfCopy.innerHTML = "Copy";
}