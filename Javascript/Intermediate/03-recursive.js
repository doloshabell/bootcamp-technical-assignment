//Soal - 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if(arr.length===0){
        return 0;
    }
    else {
        return arr[0] + sumOfArray(arr.slice(1));
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

/*Expected Result Soal - 01
15
36 */

//Soal - 02

const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;

function countAboveAvg(arr, avg) {
    let countAvg = 0;
    if(arr.length == 0){
        return countAvg;
    } else {
        countAvg = countAboveAvg(arr.slice(1), avg);
        //return (arr[0]>avg)?countAvg+=1:countAvg;
        if (arr[0]>avg){
            countAvg+=1;
        }
        return countAvg;
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

/*EXpected Result Soal - 02
2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 4 dan 5
2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 10 dan 22 */