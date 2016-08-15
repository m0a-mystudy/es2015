// var promise = new Promise(function (resolve, reject) {
//   setTimeout(resolve('resolve arugument'), 3000)
// })

// promise.then(result => console.log('hello' + result))



function asyncFunction () {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('err occured!'), 1000)
    setTimeout(() => resolve('Async hello world'), 1600)
  })
}

asyncFunction().then(vl => console.log(vl))
.catch(err => console.log(err))

