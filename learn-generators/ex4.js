function *flat (arr) {
    for (let f of arr) {
        if (Array.isArray(f)) {
            yield* flat(f);
        } else {
            yield f;
        }
    }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6