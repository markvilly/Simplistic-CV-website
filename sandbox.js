'use strict';

let num = 10;
let arrr = [1, 2, 1, 2, 1, 3, 3, 4, 4, 2];


function countDuplicates(n, arr) {
    var count = 0;
    arr.sort();
    for (var i = 0; i < n;) {
        if (arr[i] === arr[i + 1]) {
            count++;
            i = i + 2;
        } else {
            i++;
        }
    }
    return count;
}

console.log(countDuplicates(num, arrr));
