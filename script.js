console.log("hello world")


const arr = ["1", "43", "23", "54", "2", "3", "89"]
console.log(arr.join(" "))

function sum(arr2) {
    let max = 0
    let min = 0
    for (let i = 0; i < arr2.length; i++) {
        if (max < arr2[i]) {
            max = arr2[i]
        }
        if (min > arr2[i]) {
            min = arr2[i]
        }
        return arr2
    }
}
//Задача №3
const arr3 = ["1", "43", "23", "54", "2", "3", "89"]
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i])
    }
}
//Задача № 4
const arr4 = ["1", "43", "23", "54", "2", "3", "89"]
console.log( arr4.reverse())

// Задача № 5
const arr5 = ["1", "43", "23", "54", "2", "3", "89"]
let sum2 = 0
for (let i = 1; i <= arr5; i++) {
    sum2 +=1
}
console.log(sum2)

//Задача № 6
const arr6 = ["1", "43", "23", "54", "2", "3", "89"]
let result = 0
for (let i = 1; i <= arr6; i++) {
    result += i
}
console.log(result)