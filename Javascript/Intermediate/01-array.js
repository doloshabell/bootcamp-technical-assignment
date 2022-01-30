//Soal - 01
// const arr = [1, 2, 3];
// const arr2 = [8, 1, 5, 7];

// function reverse(numb) {
//     return [...numb].reverse();   
// }
// const newArr = reverse(arr);
// const newArr2 = reverse(arr2);

// console.log(arr, newArr);
// console.log(arr2, newArr2);

/*Expected Result Soal - 01
[1, 2, 3], [3, 2, 1]
[8, 1, 5, 7], [7, 5, 1, 8] */

//Soal - 02
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(arr) {
//     const arrayAverage = arr.reduce((previousValue, currentValue) => previousValue + currentValue) / arr.length;
//     const sumNumber = [];
//     arr.forEach(num => {
//         if (num>arrayAverage){
//             sumNumber.push(num);
//         }
//     });
//     return sumNumber.length;
// }

// console.log(getAverage(arr1));
// console.log(getAverage(arr2));

/*Expected Result Soal - 02
2 // Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
3 // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8 */

//Soal - 03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arrFunction, number) {
      let arrayJoin = [];
      arrFunction.forEach(array => {
          arrayJoin.push(...array);
      });
      let search;
      for(let i=0;i<arrayJoin.length;i++){
          if(arrayJoin[i]===number){
            search = arrayJoin.findIndex(num => num === number);
            return search;
          }
      }
      return null;
  }

  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));

/*Expected Result Soal - 02
null
4
null
5 */