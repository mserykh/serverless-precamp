const args = require('minimist')(process.argv.slice(2))
const functions = require('./functions');
const user = args['user'];
const repo = args['repo'];

async function main() {
    try { slc = require('./../../spec_letter_counter.js') }
    catch (e) {
        console.log("Searching for 'spec_letter_counter.js'... file cannot be found");
        await functions.throwError("Searching for 'spec_letter_counter.js'... file cannot be found", user, repo)

        process.exit(1)
    }

    // first test 
    let testInput = "Ganning is cooll!!";
    let correctOutput = { G: 1, a: 1, n: 3, i: 2, g: 1, s: 1, c: 1, o: 2, l: 2 };

    try {
        userOutput = slc.spec_letter_counter(testInput);
    }
    catch (e) {
        console.log("Searching for function 'spec_letter_counter()'... function cannot be found");
        await functions.throwError("Searching for function 'spec_letter_counter()'... function cannot be found", user, repo)
        process.exit(1);
    }

    if (JSON.stringify(userOutput) != JSON.stringify(correctOutput)) {
        correctOutput = JSON.stringify(correctOutput).replace(/"/g, "'");
        userOutput = JSON.stringify(userOutput).replace(/"/g, "'");
        console.log(`We plugged in ${testInput}. Got: ${userOutput}, was expecting: ${correctOutput}.`)
        await functions.throwError(`We plugged in ${testInput}. Got: ${userOutput}, was expecting: ${correctOutput}.`, user, repo)
        process.exit(1);
    }

    console.info("Yay! 🎉🎉🎉🎉🎉🎉🎉")
}

main();