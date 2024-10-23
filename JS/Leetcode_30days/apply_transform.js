/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let tam = arr.length;
    for (let i = 0; i < tam; i++) {
        arr[i] = fn(arr[i],i);
    }   
    return arr;
};