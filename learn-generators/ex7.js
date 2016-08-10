// var fs = require('fs');

// function readDir(dir) {
//   return new Promise(function (resolve, reject) {
//     fs.readdir(dir, function (err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// }

// function run (generator) {
//   let it = generator();
//   let p = it.next().value;
//   p.then(result => {
//     it.next(result);
//   });
// }
// // readDir('./').then(result => {
// //   console.log(result);
// // });

// // console.log();

// run(function* () {
//   // コールバックの練習問題と殆ど同じジェネレータ
//   var exercises = yield readDir('./');
//   console.log("result=" + exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
// });

function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  let it = generator();
  let p = it.next().value;
  p.then(result => {
    it.next(result);
  });
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log(foo);
});


/*
    function getFoo () {
      return new Promise(function (resolve, reject){
        resolve('foo');
      });
    }

    function run (generator) {
      var it = generator();

      function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
          return go(it.next(value));
        }, function (error) {
          return go(it.throw(error));
        });

      }

      go(it.next());
    }

    run(function* () {
      try {
        var foo = yield getFoo();
        console.log(foo);
      } catch (e) {
        console.log(e);
      }
    });

*/