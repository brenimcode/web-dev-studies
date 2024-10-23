/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    const x = n;
    var increment = function() {
        return ++n;
    }

    var decrement = function() {
        return --n;
    }
    
    var reset = function() {
        return n = x;
    }


    return {increment,reset,decrement}
    
};

// teste
const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())