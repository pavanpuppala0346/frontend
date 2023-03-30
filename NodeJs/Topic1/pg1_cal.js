// Default Exports //
// const add = (a, b) => {
//     return a + b;
// };
// module.exports = add;


// Named Exports //
const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
return a - b;
};
module.exports.add = add;
module.exports.sub = sub;

