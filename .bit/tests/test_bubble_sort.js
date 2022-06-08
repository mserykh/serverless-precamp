const args = require('minimist')(process.argv.slice(2))
const functions = require('./functions');
const user = args['user'];
const repo = args['repo'];

async function main() {
    try { bbs = require('./../../bubble_sort.js') }
    catch (e) {
        console.log("Searching for 'bubble_sort.js'... file cannot be found");
        await functions.throwError("Searching for 'bubble_sort.js'... file cannot be found", user, repo)

        process.exit(1)
    }


    let testArray = [234, 43, 55, 63, 5, 6, 235, 547];
    let correctRes = [5, 6, 43, 55, 63, 234, 235, 547];
    let user_bubble;

    try {
        user_bubble = bbs.bubble_sort(testArray);
    }
    catch (e) {
        console.log("Searching for function 'bubble_sort()'... function cannot be found");
        await functions.throwError("Searching for function 'bubble_sort()'... function cannot be found", user, repo)
        process.exit(1);
    }


    if (JSON.stringify(user_bubble) != JSON.stringify(correctRes)) {
        console.log(`Got: "${user_bubble}", was expecting: "${correctRes}".`)
        await functions.throwError(`Got: '${user_bubble}', was expecting: '${correctRes}'.`, user, repo)
        console.log(`Got: "${user_bubble}", was expecting: "${correctRes}".`)
        process.exit(1)
    }

    console.info("Yay! 🎉🎉🎉🎉🎉🎉🎉")
}

main();