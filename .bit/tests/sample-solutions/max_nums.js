function find_max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let arr = [
    1, 2, 4, 2900, 1, 432
]
// console.log(find_max(arr))