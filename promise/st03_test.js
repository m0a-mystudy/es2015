var assert = require('assert')

/*global it */

it('should use `done` for test', function (done) {
  setTimeout(function () {
    assert(true)
    done()
  }, 0)
})


it('shoud use `done` for promise test', done => {
  let promise = Promise.resolve(42)
  promise.then(result => {
    assert(result === 42)
  }).then(done, done)
})

it('Promise test', () => {
  let promise = Promise.resolve(42)
  return promise.then(result => {
    assert.equal(result, 42)
  })
})

function failTest () {
  throw new Error('Expected promise to be rejected but it was fulfilled')
}

function mayBeRejected () {
  return Promise.reject(new Error('woo'))
//   return Promise.resolve(42)
}
it('is bad pattern', function () {
  return mayBeRejected().then(failTest, function (error) {
    assert(error.message === 'woo')
  })
})

