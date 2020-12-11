const reverseArray = (arr) => {
    let reversedArray = []
    for (let i = 0; i < arr.length; i++) {
        reversedArray.unshift(arr[i])
    }
    return reversedArray
}
// Sorting an array without Javascript Function
const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (arr[x] > arr[x + 1]) {
                let temp = arr[x]
                arr[x] = arr[x + 1], arr[x + 1] = temp
            }
        }
    }
    return arr
}
console.log(reverseArray(sortArray([1, 2, 3, 4])))

