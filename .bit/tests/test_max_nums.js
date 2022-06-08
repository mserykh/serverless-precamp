const args = require('minimist')(process.argv.slice(2))
const functions = require('./functions');
const user = args['user'];
const repo = args['repo'];

async function main() {
    try { fm = require('./../../max_nums.js') }
    catch (e) {
        console.log("Searching for 'max_nums.js'... file cannot be found");
        await functions.throwError("Searching for 'max_nums.js'... file cannot be found", user, repo)

        process.exit(1)
    }

    // first test 
    let testInput = [
        1, 2, 4, 2900, 1, 432
    ];
    let correctOutput = 2900;

    try {
        userOutput = fm.find_max(testInput);
    }
    catch (e) {
        console.log("Searching for function 'find_max()'... function cannot be found");
        await functions.throwError("Searching for function 'find_max()'... function cannot be found", user, repo)
        process.exit(1);
    }

    if (correctOutput != userOutput) {
        console.log(`Got: "${userOutput}", was expecting: "${correctOutput}".`)
        await functions.throwError(`Got: '${userOutput}', was expecting: '${correctOutput}'.`, user, repo)
        process.exit(1);
    }

    console.info("Yay! 🎉🎉🎉🎉🎉🎉🎉")
}

main();