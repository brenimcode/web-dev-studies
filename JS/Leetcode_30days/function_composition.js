/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // Return the identity function if the array is empty
    if (functions.length === 0) {
        return function(x) {
            return x;
        };
    }

    return function(x) {
        // Start with the initial input
        let ans = x;
        // Iterate through the functions in reverse order
        for (let i = functions.length - 1; i >= 0; i--) {
            ans = functions[i](ans); // Apply each function to the result
        }
        return ans; // Return the final result
    };
};

/**
 * Example usage:
 * const fn = compose([x => x + 1, x => 2 * x, x => x * 3]);
 * console.log(fn(4)); // Should output: 25
 */
