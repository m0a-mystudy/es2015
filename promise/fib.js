let fib = function * () {
  let [prev, curr] = [0, 1]
  while (true) {
    [prev, curr] = [curr, prev + curr]
    yield curr
  }
}
for (let n of fib()) {
  console.log(n)
}
