function letter_counter(sentence) {
    let alnumRegex = /^[a-z0-9]+$/i;

    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let valid = alnumRegex.test(sentence[i]);

        count = valid ? count + 1 : count;
    }
    return count;
}

// console.log(letter_counter("what do you want?! ?!"))

function word_counter(sentence) {
    return sentence.split(" ").length;
}

// console.log(word_counter("Ganning is cooll!!"))


function spec_letter_counter(sentence) {
    let counter = {};
    for (let i = 0; i < sentence.length; i++) {
        let alnumRegex = /^[a-z0-9]+$/i;
        let valid = alnumRegex.test(sentence[i]);

        if (valid) {
            if (sentence[i] in counter) {
                counter[sentence[i]] += 1;
            }
            else {
                counter[sentence[i]] = 1;
            }
        }

    }

    return counter;
}
console.log(spec_letter_counter("I really like food"))


