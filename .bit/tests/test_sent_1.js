const args = require('minimist')(process.argv.slice(2))
const functions = require('./functions');
const user = args['user'];
const repo = args['repo'];

async function main() {
    try { lc = require('./../../letter_counter.js') }
    catch (e) {
        console.log("Searching for 'letter_counter.js'... file cannot be found");
        await functions.throwError("Searching for 'letter_counter.js'... file cannot be found", user, repo)

        process.exit(1)
    }

    // first test 
    let testInput = "what do you want?! ?!";
    let correctOutput = 13;

    try {
        userOutput = lc.letter_counter(testInput);
    }
    catch (e) {
        console.log("Searching for function 'letter_counter()'... function cannot be found");
        await functions.throwError("Searching for function 'letter_counter()'... function cannot be found", user, repo)
        process.exit(1);
    }

    if (correctOutput != userOutput) {
        console.log(`Got: "${userOutput}", was expecting: "${correctOutput}".`)
        await functions.throwError(`We plugged in ${testInput}. Got: '${userOutput}', was expecting: '${correctOutput}'.`, user, repo)
        process.exit(1);
    }

    console.info("Yay! 🎉🎉🎉🎉🎉🎉🎉")
}

main();