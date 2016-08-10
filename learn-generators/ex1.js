// function *foo () {
// 	var stop = yield 'woo';
// 	console.log(stop, 'inside foo');
// }
// var G = foo();

// console.log( G.next() );
// // { value: 'woo', done: false }
// console.log( G.next('bar') );

function* range(from, to) {
  let counter = from;
  while (counter <= to) {
    yield counter;
    counter ++;
  }
}

for (let r of range(5, 10)) {
  console.log(r);
}
