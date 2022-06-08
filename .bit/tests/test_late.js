const args = require('minimist')(process.argv.slice(2))
const functions = require('./functions');
const user = args['user'];
const repo = args['repo'];

async function main() {
    try { rl = require('./../../late.js') }
    catch (e) {
        console.log("Searching for 'late.js'... file cannot be found");
        await functions.throwError("Searching for 'late.js'... file cannot be found", user, repo)

        process.exit(1)
    }

    // first test 
    let testInput = "December 17, 1995 22:24:00";
    let correctOutput = "It is late!";

    try {
        userOutput = rl.running_late(testInput);
    }
    catch (e) {
        console.log(e);
        await functions.throwError(e, user, repo)
        process.exit(1);
    }

    if (correctOutput != userOutput) {
        console.log(`We plugged in: ${testInput}. Got: "${userOutput}", was expecting: "${correctOutput}".`)
        await functions.throwError(`We plugged in: ${testInput}. Got: '${userOutput}', was expecting: '${correctOutput}'.`, user, repo)
        process.exit(1);
    }

    // second test

    testInput = "December 17, 1995 21:24:00";
    correctOutput = "It is still early!";

    try {
        userOutput = rl.running_late(testInput);
    }
    catch (e) {
        console.log(e);
        await functions.throwError(e, user, repo)
        process.exit(1);
    }

    if (correctOutput != userOutput) {
        console.log(`We plugged in: ${testInput}. Got: "${userOutput}", was expecting: "${correctOutput}".`)
        await functions.throwError(`We plugged in: ${testInput}. Got: '${userOutput}', was expecting: '${correctOutput}'.`, user, repo)
        process.exit(1);
    }


    console.info("Yay! 🎉🎉🎉🎉🎉🎉🎉")
}

main();
