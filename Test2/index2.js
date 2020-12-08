function tryRemoveFromArray(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

document.write(tryRemoveFromArray([1, 2, 3, 4, 5, 6, 7], 1))