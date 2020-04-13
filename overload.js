// Actual implementation that is a true representation
// of all the cases the function body needs to handle
/**
 * Adds two numbers together.
 * @param {int} a The first number.
 * @param {int} b The second number.
 * @param {int} c The third number.
 * @param {int} d The fourth number.
 * @return {void} No return value.
 */
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
console.log(padding(1));
console.log(padding(1, 2));
console.log(padding(1, 2, 3, 4));
