const palindromes = function(word) {
    // Rebuild word without punctuation or spaces
    let string = '';
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() != word[i]) {
            string += word[i];
        }
    }

    // Build reverse of word & assign to variable
    let reverse = '';

    for (let i = (string.length - 1); i >= 0; i--) {
        reverse += string[i];
    }

    // Compare reverse to string variable
    for (let i = 0; i < string.length; i++) {
        if (reverse[i] != string[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
