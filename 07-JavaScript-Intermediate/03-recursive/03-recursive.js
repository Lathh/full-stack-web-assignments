//soal 01.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    } 
    else {
        return arr[0] +sumOfArray(arr.slice(1));
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//soal 02.
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
    if (arr.length === 0) {
        return 0;
    } else {
    return (arr[0]> avg) + countAboveAvg(arr.slice(1), avg);
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


//soal 03.
const arr = [1, 2, 3, 4, 5];
function searchInArray(array, num) {
    if(array.length === 0){
        return "angka tidak ditemukan"
    }
    else if(array[array.length -1] === num) {
        return "angka ditemukan pada index: " + (array.length -1)
    }
    return searchInArray(array.slice(0, -1), num)
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

//soal 04.
function trianglePattern(a, b) {
    if (a===0) {
        return;
    }
    let space = "";
    for (let i=0; i<b; i++) {
        if (i<a-1) {
            space += " "
        } else {
            space += String.fromCharCode(64+(b-a+(i-a)+2))
        }
    }
    console.log(space);
    trianglePattern(a-1, b)
}

trianglePattern(5, 5);
    