function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

document.write("Giá trị lớn nhất trong mảng là: " +findMax([3, 6, 8, 1, 9, 3]))