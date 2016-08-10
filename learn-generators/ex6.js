// var fs = require('fs');

// function run (generator) {
//     // console.log('in run');
//     var it = generator(done);
//     // console.log('maked iterator');
//     function done (err, result) {
//         // console.log(`in go err,result = ${err}, ${result}`);
//         it.next(result);
//     }

//     // go();
//     it.next();
//     // it.next("test!!");
// }

// run(function* (done) {
//     // `learn-generators`のexercisesフォルダーを読み込む
//     var exercises = yield fs.readdir('./', done);
//     console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
// });

var fs = require('fs');

function run (generator) {
  // 上記の`run`を改良します
  const it = generator(done);

  function done(err, result) {
    if (err) return it.throw(err);
    it.next(result);
  }
  it.next();
}

run(function* (done) {
    // catch exception
  let firstFile;
  try {
    const dirFiles = yield fs.readdir('./', done); // 存在しないディレクトリを指定
    firstFile = dirFiles; // TypeError: Cannot read property '0' of undefined
  } catch (e) {
    firstFile = null;
  }
  console.log(firstFile);

});