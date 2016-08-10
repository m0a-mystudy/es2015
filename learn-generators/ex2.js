function* factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
    yield f;
  }
}

for (let n of factorial(5)) {
  console.log(n);
}
// 1, 2, 6, 24, 120