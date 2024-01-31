// Arrow
// difference how this gets bind in both the syntax
function sum(a, b) {
    // this
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};


// -------------------------------------map--------------
const arr = [1, 2, 3, 4];

const ans = arr.map(function (i) {
    return i * 2;
});
// console.log(ans);


// ----------------------------------------filter-------------
const a = [1, 2, 4, 5, 8];

const answer = a.filter(function (i) {
    if (i % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});

console.log(answer);
